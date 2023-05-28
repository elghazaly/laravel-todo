<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Output\ConsoleOutput;

class UserSeeder extends Seeder {
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void {
        // Clear existing users
        DB::table('users')->truncate();
        $userCount = 10000;
        $chunkSize = 500;
        $chunks = ceil($userCount / $chunkSize);

        $uniqueEmails = Collection::times($userCount, function () {
            return fake()->unique()->safeEmail();
        });
        $password = bcrypt('password');

        $progressBar = new ProgressBar(new ConsoleOutput(), $userCount);
        $progressBar->start();

        for ($i = 0; $i < $chunks; $i++) {
            $chunkEmails = $uniqueEmails->splice(0, $chunkSize)->all();

            $users = Collection::times(count($chunkEmails), function ($number) use ($chunkEmails, $password) {
                return [
                    'name' => fake()->name(),
                    'email' => $chunkEmails[$number - 1],
                    'email_verified_at' => now(),
                    'password' => $password,
                    'remember_token' => Str::random(10),
                ];
            });

            User::insert($users->all());
            $progressBar->advance(count($users));
        }

        $progressBar->finish();
        // To add a new line
        $this->command->getOutput()->writeln('');
    }
}
