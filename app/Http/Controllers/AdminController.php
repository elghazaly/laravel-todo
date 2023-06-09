<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

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
    public function index(Request $request) {
        $search = $request->query('search');
        $per_page = $request->get('per_page', 500);

        $query = Admin::query();

        // Apply the search criteria
        if ($search) {
            $query->where('name', 'LIKE', "%$search%")
                ->orWhere('email', 'LIKE', "%$search%");
        }

        $admins = $query->paginate($per_page, ['id', 'name', 'email']);

        return response()->json($admins);
    }
}
