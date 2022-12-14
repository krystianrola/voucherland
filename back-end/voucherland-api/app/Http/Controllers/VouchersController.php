<?php

namespace App\Http\Controllers;

use App\Http\Requests\VouchersRequest;
use App\Http\Resources\VouchersResource;
use App\Models\Voucher;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class VouchersController extends Controller
{
    /**
     * Display a listing of the vouchers.
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        return response()->json(["vouchers" => VouchersResource::collection(Voucher::all())]);
    }

    /**
     * Displays a listing of the vouchers with a public status
     *
     * @return JsonResponse
     */
    public function GetPublicVouchers() : JsonResponse
    {
        $vouchers = Voucher::all()
            ->where(config('utils.VOUCHER.STATUS'), "=", "public");

        return response()->json(["public_vouchers" => VouchersResource::collection($vouchers)]);
    }

    /**
     * Displays a listing of the voucher with a private status
     *
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function GetPrivateVouchers(): JsonResponse
    {
        $this->authorize("viewAny", Voucher::class);

        $vouchers = Voucher::all()
            ->where(config('utils.VOUCHER.STATUS'), "=", "private");

        return response()->json(["private_vouchers" => VouchersResource::collection($vouchers)]);
    }

    /**
     * Displays a listing of the voucher with an expired status
     *
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function GetExpiredVouchers(): JsonResponse
    {
        $this->authorize("viewAny", Voucher::class);

        $vouchers = Voucher::all()
            ->where(config('utils.VOUCHER.STATUS'), "=", "expired");

        return response()->json(["expired_vouchers" => VouchersResource::collection($vouchers)]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param VouchersRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(VouchersRequest $request) : JsonResponse
    {
        $this->authorize('create', Voucher::class);

        $downloads = $request->validated('downloads') === null ? 0 : $request->validated('downloads');

        $voucher = Voucher::create([
            config('utils.VOUCHER.NAME') => $request->validated('name'),
            config('utils.VOUCHER.DESCRIPTION') => $request->validated('description'),
            config('utils.VOUCHER.STORE_IMAGE') => $request->validated('store_image'),
            config('utils.VOUCHER.DISCOUNT') => $request->validated('discount'),
            config('utils.VOUCHER.DISCOUNT_TYPE') => $request->validated('discount_type'),
            config('utils.VOUCHER.TAG') => $request->validated('tag'),
            config('utils.VOUCHER.DOWNLOADS') => $downloads ,
            config('utils.VOUCHER.EXPIRY') => $request->validated('expiry'),
            config('utils.VOUCHER.STATUS') => $request->validated('status'),
            config('utils.VOUCHER.PRODUCT_IMAGE') => $request->validated('product_image'),
            'updated_at' => null,
        ]);

        return response()->json(['voucher' => new VouchersResource($voucher)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Voucher $voucher
     * @return JsonResponse
     */
    public function show(Voucher $voucher) : JsonResponse
    {
        return response()->json(["voucher" => new VouchersResource($voucher)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  VouchersRequest $request
     * @param  Voucher $voucher
     * @return JsonResponse
     */
    public function update(VouchersRequest $request, Voucher $voucher) : JsonResponse
    {
        $this->authorize('update', $voucher);

        $voucher->update($request->validated());

        return response()->json(["voucher" => new VouchersResource($voucher)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Voucher $voucher
     * @return Response
     */
    public function destroy(Voucher $voucher) : Response
    {
        $this->authorize('delete', $voucher);

        $voucher->delete();

        return response("Voucher was successfully deleted", 200);
    }
}



