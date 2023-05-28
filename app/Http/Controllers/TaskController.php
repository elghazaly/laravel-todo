<?php

namespace App\Http\Controllers;

use App\Http\Requests\Task\StoreTask;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller {

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
        $tasks = Task::orderBy('created_at', 'desc')->with(['admin:id,name', 'user:id,name'])->paginate(10);

        return response()->json($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTask $request) {
        $inputs = $request->validated();
        $task = Task::create($inputs);

        return response()->json($task);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        //
    }
}
