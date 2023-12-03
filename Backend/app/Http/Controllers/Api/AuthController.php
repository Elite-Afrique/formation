<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\PasswordReset;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\PersonalAccessToken;


class AuthController extends Controller
{
     /**
     * Create User
     * @param Request $request
     * @return User 
     */
    public function createUser(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(), 
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                'prenom' => 'required',
                'adresse' => 'required',
                'contact' => 'required',
                'photo' => 'required',
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = User::create([
                'name' => $request->name,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'adresse' => $request->adresse,
                'contact' => $request->contact,
                'photo' => $request->photo,
                'idRole' =>1,
                'password' => Hash::make($request->password)
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), 
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();
            $token = $user->createToken("API TOKEN")->plainTextToken;
            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'token' => $token,
                'user' => $user,
                'accessToken' => $token
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function currentuser(Request $request){
        
         if(!$token = PersonalAccessToken::findToken($request->header('accessToken'))){
            return response()->json([
                'status' => false,
                'message' => 'Veuillez vous authentifier',
            ], 401);
         }
         
         return response()->json($token->tokenable);
    }

    public function refreshAccessToken(Request $request){
        if(!$token = PersonalAccessToken::findToken($request->header('accessToken'))){
            return response()->json([
                'status' => false,
                'message' => 'Veuillez vous authentifier',
            ], 402);
         }
         $user = $token->tokenable;
         $token = $token->tokenable->createToken("API TOKEN")->plainTextToken;
         return response()->json([
            'status' => true,
            'message' => 'User Logged In Successfully',
            'token' => $token,
            'user' => $user,
            'accessToken' => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'user logged out'
        ];
    }

    
    public function sendVerifyMail($email){
        if(auth()->user()){
            $user = User::where('email', $email)->get();
            if(count($user)>0){

                //return $user[0]['id'];

                $random = Str::random(40);
                $domain = URL::to('/');
                $url = $domain.'/verify-mail/'.$random;
                $data['url'] = $url;

                $data['email'] = $email;
                $data['title'] = 'Email Verification';
                $data['body'] = 'Please click here below to verify your email';

                Mail::send('verifyMail', ['data' =>$data], function($message) use ($data){
                    $message->to($data['email'])->subject($data['title']);
                });

                $user = User::find($user[0]['id']);
                $user->remember_token=$random;
                $user->save();

                return response()->json(['success' => true ,'msg' => 'Mail sent successfully.']);
            }
            else{
                return response()->json(['success' => false ,'msg' => 'user is not found.']);
            }
        }
        else{
            return response()->json(['success' => false ,'msg' => 'user is not authenticated.']);
        }
    }

    public function verificationMail($token){
      $user = User::where('remember_token',$token)->get();

      if(count($user) > 0){
        $datatime = Carbon::now()->format('Y-m-d H:i:s');
        $user = User::find($user[0]['id']);
        $user ->remember_token = '';
        $user ->is_verified = 1;
        $user ->email_verified_at = $datatime;
        $user ->save();

        return "<h1>Email is verify successfully</h1>";

      }
      else{
            return view('404');
      }

    }

    //Forget password API 

    public function forgetPassword(Request $request) {

        try {
            $user = User::where('email', $request->email)->get();
            if(count($user)>0){

                //return $user[0]['id'];

                $token = Str::random(40);
                $domain = URL::to('/');
                $url = $domain.'/reset-password?token='.$token;
                $data['url'] = $url;

                $data['email'] = $request->email;
                $data['title'] = 'Password Reset';
                $data['body'] = 'Please click here below to reset your password';

                Mail::send('forgetPasswordMail', ['data' =>$data], function($message) use ($data){
                    $message->to($data['email'])->subject($data['title']);
                });

                $datatime = Carbon::now()->format('Y-m-d H:i:s');
                PasswordReset::updateorCreate(
                    ['email'=> $request->email],
                    [
                        'email' => $request->email,
                        'token' => $token,
                        'created_at' => $datatime
                    ]
                );

                return response()->json(['success' => true ,'msg' => 'Please check your mail to reset your password.']);
            }
            else{
                return response()->json(['success' => false ,'msg' => 'user is not found.']);
            }
            
        } catch (\Exception $e) {
            return response()->json(['success' => false ,'msg' =>$e-> getMessage()]);
        }
    }

     //Reset password view load
     public function resetPasswordLoad(Request $request){

        $resetData = PasswordReset::where('token',$request->token)->get();

         if(isset($request->token) && count($resetData) > 0){

             $user = User::where('email',$resetData[0]['email'])->get();
             return view('resetPassword',compact('user'));
         }
         else{
             return view('404');
         }
     }

    //password reset fonctionality

    public function resetPassword(Request $request){

        $request-> validate([
            'password' => 'required|string|min:6|confirmed'
        ]);
        
        $user = User::find($request->id);
        $user->password = Hash::make($request->password);
        $user->save();
        
        PasswordReset::where('email',$user->email)->delete();
       
        return "<h1>Your password has been reset successfully.</h1>";
    }
}
