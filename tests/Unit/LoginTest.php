<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase {
    use RefreshDatabase, WithFaker;

    public function testLoginWithValidCredentials() {
        // Arrange
        $password = $this->faker->password;
        $user = User::factory()->create(['password' => bcrypt($password)]);

        $credentials = [
            'email' => $user->email,
            'password' => $password
        ];

        // Act
        $result = auth('api')->attempt($credentials, false);

        // Assert
        $this->assertTrue($result);
    }
}
