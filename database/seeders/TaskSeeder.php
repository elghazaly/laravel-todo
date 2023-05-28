<?php

namespace Database\Seeders;

use App\Models\Task;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder {
    // use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void {
        $count = 100;

        $this->command->info("Seeding $count tasks...");
        Task::factory($count)->create();
    }
}
