<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder {
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void {
        $count = 10000;
        $chunkSize = 1000; // Number of users to create in each chunk

        Admin::firstOrCreate(
            [
                'email' => 'admin@example.com',
            ],
            [
                'name' => 'Admin',
                'password' => bcrypt('password')
            ]
        );

        Admin::factory()->count($count)->make()->chunk($chunkSize, function ($users) {
            Admin::insert($users->toArray());
        });
    }
}
