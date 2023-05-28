<?php

namespace Tests\Unit;

use App\Models\Admin;
use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class TaskTest extends TestCase {
    use RefreshDatabase;

    public function testTaskCanBeCreated() {
        $user = User::factory()->create();
        $admin = Admin::factory()->create();
        $task = Task::factory()->create();

        $this->assertInstanceOf(Task::class, $task);
        $this->assertDatabaseHas('tasks', [
            'id' => $task->id,
            'title' => $task->title,
            'assigned_by_id' => $admin->id,
            'assigned_to_id' => $user->id,
        ]);
    }

    public function testCreateTaskAsAdmin() {
        $admin = Admin::factory()->create();
        $user = User::factory()->create();

        // Send a POST request to the task creation endpoint with task data
        $response = $this->actingAs($admin)
            ->postJson('/api/tasks', [
                'title' => 'Test Task',
                'description' => 'This is a test task',
                'assigned_to_id' => $user->id,
                'assigned_by_id' => $admin->id,
            ]);

        // Assert that the response has a successful status code
        $response->assertStatus(200);

        // Assert that the task is stored in the database
        $this->assertDatabaseHas('tasks', [
            'title' => 'Test Task',
            'description' => 'This is a test task',
            'assigned_to_id' => $user->id,
            'assigned_by_id' => $admin->id,
        ]);
    }

    public function testCanNotCreateTaskAsUser() {
        $admin = Admin::factory()->create();
        $user = User::factory()->create();

        $token = JWTAuth::fromUser($user);

        // Send a POST request to the task creation endpoint with task data
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/tasks', [
            'title' => 'Test Task',
            'description' => 'This is a test task',
            'assigned_to_id' => $user->id,
            'assigned_by_id' => $admin->id,
        ]);

        // Assert that the response has a successful status code
        $response->assertStatus(401);
    }
}
