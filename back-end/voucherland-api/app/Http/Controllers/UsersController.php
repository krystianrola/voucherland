<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UsersResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

use function PHPSTORM_META\map;

class UsersController extends Controller
{
    /**
     * Display a listing of the vouchers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserRequest $request
     * @return JsonResponse
     */
    public function store(UserRequest $request) : JsonResponse
    {
        $user = User::create([
            config('utils.USER.FIRST_NAME') => $request->validated('firstname'),
            config('utils.USER.LAST_NAME') => $request->validated('lastname'),
            config('utils.USER.EMAIL') => $request->validated('email'),
            config('utils.USER.PASSWORD') => Hash::make($request->validated('password')),
            config('utils.USER.IS_ADMIN') => $request->validated('is_admin'),
            'remember_token' => null,
            'updated_at' => null,
        ]);

        return response()->json(["user" => new UsersResource($user)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UserRequest $request
     * @param  User $user
     * @return JsonResponse
     */
    public function update(UserRequest $request, User $user) : JsonResponse
    {
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function destroy($user_id)
    {
        //
    }
}
