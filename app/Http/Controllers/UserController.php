<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
    public function index(Request $request) {
        $search = $request->query('search');
        $per_page = $request->query('per_page', 500);

        $query = User::query();

        // Apply the search criteria
        if ($search) {
            $query->where('name', 'LIKE', "%$search%")
                ->orWhere('email', 'LIKE', "%$search%");
        }

        $users = $query->paginate($per_page, ['id', 'name', 'email']);

        return response()->json($users);
    }
}
