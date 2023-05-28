<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class RunApplicationCommand extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Single command to install dependencies, build & run the application';

    /**
     * Execute the console command.
     */
    public function handle() {
        $this->info('Running frontend build...');

        // Change directory and run commands in a single shell command
        $command = 'composer install && php artisan migrate --step --seed && cd resources/frontend/angular && pnpm install && pnpm build && cd ../../.. && php artisan serve';

        $process = Process::fromShellCommandline($command);
        $process->setTimeout(null);
        $process->run(function ($type, $buffer) {
            $this->output->write($buffer);
        });

        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        $this->info('Application is now running');
    }
}
