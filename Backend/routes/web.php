<?php

use Illuminate\Support\Facades\Route;
use App\Http\Contollers\AttestationsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ParticipantController;
use App\Http\Controllers\SmsController;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('sendSms/{sms_text}/{sms_phone}',[SmsController::class, 'sendSms']);

//Route::get('/',[AttestationsController::class, 'index']);
Route::get('generatePDF/{id}/{idP}',[ParticipantController::class, 'generatePDF']);

Route::get('verify-mail/{token}',[AuthController::class, 'verificationMail']);
Route::get('/reset-password',[AuthController::class, 'resetPasswordLoad']);
Route::post('/reset-password',[AuthController::class, 'resetPassword']);