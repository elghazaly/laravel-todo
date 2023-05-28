<?php

namespace App\Http\Controllers;

use App\Models\Statistics;
use Illuminate\Http\Request;

class StatisticsController extends Controller {
    /**
     * Constructor
     */
    public function __construct() {
        $this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     */
    public function index() {
        $users = Statistics::with(['user:id,name'])
            ->orderByDesc('task_count')
            ->limit(10)
            ->get();

        return response()->json($users);
    }
}
