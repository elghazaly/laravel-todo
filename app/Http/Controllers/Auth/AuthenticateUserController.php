<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticateUserController extends Controller {
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request) {
        $request->authenticate();
        $token = auth($request->get('guard'))->attempt($request->only('email', 'password'));
        return $this->createNewToken($token);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout_api() {
        return $this->logout('api');
    }

    /**
     * Log the admin out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout_admin() {
        return $this->logout('admin');
    }

    /**
     * Log out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function logout($guard = 'admin') {
        auth($guard)->logout();

        return response()->json(['message' => 'Logged out successfully']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh($guard = 'admin') {
        return $this->createNewToken(auth($guard)->refresh());
    }

    public function refresh_admin() {
        return $this->refresh('admin');
    }

    public function refresh_api() {
        return $this->refresh('api');
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile($guard = 'admin') {
        return response()->json(auth($guard)->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token, $guard = 'admin') {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth($guard)->factory()->getTTL() * 60,
            'name' => auth($guard)->user()->name,
        ]);
    }
}
