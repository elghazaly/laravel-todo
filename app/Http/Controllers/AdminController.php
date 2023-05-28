<?php

namespace App\Http\Controllers;

use App\Models\Admin;

class AdminController extends Controller {
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
        $admins = Admin::all(['id', 'name']);

        return response()->json($admins);
    }
}
