<?php

use App\Http\Controllers\Auth\AuthenticateUserController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthenticateUserController::class, 'login'])
    ->middleware('guest')
    ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.store');

Route::post('/logout/api', [AuthenticateUserController::class, 'logout_api'])
    ->middleware('auth:api')
    ->name('logout.api');

Route::post('/logout/admin', [AuthenticateUserController::class, 'logout_admin'])
    ->middleware('auth:admin')
    ->name('logout.admin');

Route::post('/refresh-token/api', [AuthenticateUserController::class, 'refresh_api'])
    ->middleware('auth:api')
    ->name('refresh-token.api');

Route::post('/refresh-token/admin', [AuthenticateUserController::class, 'refresh_admin'])
    ->middleware('auth:admin')
    ->name('refresh-token.admin');
