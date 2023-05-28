<?php

namespace App\Listeners;

use App\Events\TaskCreated;

class UpdateStatisticsOnTaskCreated {

    /**
     * Handle the event.
     */
    public function handle(TaskCreated $event): void {
        $task = $event->task;

        // Update the task count for the assigned user in the statistics table
        $user = $task->user;

        if (!$user->statistics) {
            // Create a new statistics record for the user if it doesn't exist
            $user->statistics()->create([
                'task_count' => 1,
            ]);
        } else {
            // Increment the task_count column for the existing statistics record
            $user->statistics()->increment('task_count');
        }
    }
}
