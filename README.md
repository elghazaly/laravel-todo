# Task Management Application

This is a Laravel and Angular project.

## Requirements

- PHP 8.1 or higher
- Composer
- Node.js v16.14 or higher
- pnpm 8.5.1 or higher

## Installation

1. Clone the repository.
2. Run the application: `php artisan app:run`
3. Access the application at `http://localhost:8000`

## Commands

- `composer install`: Install PHP dependencies.
- `php artisan migrate --step --seed`: Migrate database tables and seed test data.
- `pnpm install`: Install Node.js dependencies.
- `pnpm run build --prefix=resources/frontend/angular`: Build the Angular app.
- `php artisan serve`: Start the Laravel server.

## Example Credentials
- Email: admin@example.com
- Password: password

## Frontend

The frontend code is located in the `resources/frontend/angular` folder.

## Backend

The backend code is written in Laravel and located in the root directory.

## Usage

1. Run the `php artisan migrate` command to run the database migrations.
2. Seed the database with sample data: `php artisan db:seed`.
3. Access the application at `http://localhost:8000`.
