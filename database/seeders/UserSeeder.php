<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void {
        $count = 10000;
        $chunkSize = 1000; // Number of users to create in each chunk

        User::firstOrCreate(
            [
                'email' => 'test@example.com',
            ],
            [
                'name' => 'Test',
                'password' => bcrypt('password')
            ]
        );

        User::factory()->count($count)->make()->chunk($chunkSize, function ($users) {
            User::insert($users->toArray());
        });
    }
}
