<?php

namespace Database\Factories;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        $randomUserId = User::inRandomOrder()->pluck('id')->first();
        $randomAdminId = Admin::inRandomOrder()->pluck('id')->first();

        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'assigned_to_id' => $randomUserId,
            'assigned_by_id' => $randomAdminId,
        ];
    }
}
