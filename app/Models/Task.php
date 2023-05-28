<?php

namespace App\Models;

use App\Events\TaskCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model {
    use HasFactory;

    /**
     * Static boot
     *
     * @return void
     */
    protected static function boot() {
        parent::boot();

        static::created(function ($task) {
            event(new TaskCreated($task));
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'assigned_by_id',
        'title',
        'description',
        'assigned_to_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id' => 'integer',
        'assigned_by_id' => 'integer',
        'assigned_to_id' => 'integer',
    ];

    /**
     * Get the admin that owns the Task
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function admin(): BelongsTo {
        return $this->belongsTo(Admin::class, 'assigned_by_id');
    }

    /**
     * Get the user that owns the Task
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo {
        return $this->belongsTo(User::class, 'assigned_to_id');
    }
}
