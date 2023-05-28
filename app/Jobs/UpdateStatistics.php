<?php

namespace App\Jobs;

use App\Models\Statistics;
use App\Models\Task;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class UpdateStatistics implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct() {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void {
        // Retrieve the task count for each user
        $taskCounts = Task::select('assigned_to_id')
            ->selectRaw('count(*) as count')
            ->groupBy('assigned_to_id')
            ->pluck('count', 'assigned_to_id')
            ->toArray();

        // Update the task counts in the statistics table
        foreach ($taskCounts as $userId => $taskCount) {
            Statistics::updateOrCreate(['user_id' => $userId], ['task_count' => $taskCount]);
        }
    }
}
