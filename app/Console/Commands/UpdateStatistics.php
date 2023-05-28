<?php

namespace App\Console\Commands;

use App\Jobs\UpdateStatistics as JobsUpdateStatistics;
use Illuminate\Console\Command;

class UpdateStatistics extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'statistics:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update statistics table';

    /**
     * Execute the console command.
     */
    public function handle() {
        $this->info('Running the UpdateStatistics job...');
        dispatch(new JobsUpdateStatistics());
        $this->info('The UpdateStatistics job has been dispatched.');
    }
}
