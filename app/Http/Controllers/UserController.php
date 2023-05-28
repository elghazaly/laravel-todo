<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller {
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
        $users = User::all(['id', 'name']);

        return response()->json($users);
    }
}
