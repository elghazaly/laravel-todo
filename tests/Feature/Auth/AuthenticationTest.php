<?php

namespace Tests\Feature\Auth;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthenticationTest extends TestCase {
    use RefreshDatabase;

    public function test_users_can_authenticate_using_the_login_screen(): void {
        $user = User::factory()->create(['password' => bcrypt('password')]);

        $response = $this->post('/api/login', [
            'email' => $user->email,
            'password' => 'password',
            'guard' => 'api',
        ]);

        $this->assertAuthenticated('api');
        $response->assertStatus(200)
            ->assertJsonStructure([
                'access_token',
                'token_type',
                'expires_in',
            ]);
    }

    public function test_users_can_not_authenticate_with_invalid_password(): void {
        $user = User::factory()->create();

        $this->post('/api/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
            'guard' => 'api',
        ]);

        $this->assertGuest();
    }

    public function test_users_can_logout() {
        $user = User::factory()->create();
        $token = JWTAuth::fromUser($user);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/logout/api');

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'Logged out successfully',
            ]);
    }

    public function test_admins_can_authenticate_using_the_login_screen(): void {
        $admin = Admin::factory()->create();

        $response = $this->post('/api/login', [
            'email' => $admin->email,
            'password' => 'password',
            'guard' => 'admin',
        ]);

        $this->assertAuthenticated('admin');
        $response->assertStatus(200)
            ->assertJsonStructure([
                'access_token',
                'token_type',
                'expires_in',
            ]);
    }

    public function test_admins_can_not_authenticate_with_invalid_password(): void {
        $admin = Admin::factory()->create();

        $this->post('/api/login', [
            'email' => $admin->email,
            'password' => 'wrong-password',
            'guard' => 'admin',
        ]);

        $this->assertGuest();
    }

    public function test_admins_can_logout() {
        $admin = Admin::factory()->create();
        $token = JWTAuth::fromUser($admin);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/logout/admin');

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'Logged out successfully',
            ]);
    }
}
