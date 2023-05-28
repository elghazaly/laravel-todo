<?php

namespace App\Events;

use App\Models\Task;

class TaskCreated {
    public $task;

    /**
     * Create a new event instance.
     */
    public function __construct(Task $task) {
        $this->task = $task;
    }
}
