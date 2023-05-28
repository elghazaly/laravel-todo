<?php

namespace App\Http\Requests\Task;

use Illuminate\Foundation\Http\FormRequest;

class StoreTask extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array {
        return [
            'assigned_by_id' => 'required|integer|exists:admins,id',
            'title' => 'required|string|min:3|max:200',
            'description' => 'required|string|min:10|max:1500',
            'assigned_to_id' => 'required|integer|exists:users,id',
        ];
    }
}
