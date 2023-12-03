<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUser()
    {
        return response()->json(User::all(),200);
    }

        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addUser(Request $request)
    {
      $user=new User();
      $request->validate([
         
      ]);

      $filename="";
      if($request->hasFile('photo')){
          $filename=$request->file('photo')->store('users','public');
      }else{
          $filename=Null;
      }

      $user->name=$request->name;
      $user->prenom =$request->prenom;
      $user->contact =$request->contact;
      $user->adresse =$request->adresse;
      $user->email =$request->email;
      $user->password =$request->password;
      $user->idRole =$request->idRole;
      $user->photo=$filename;
     
      $result=$user->save();
      if($result){
          return response()->json(['success'=>true]);
      }else{
          return response()->json(['success'=>false]);
      }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getUserById($id)
    {
        $user=User::find($id);
        if(is_null($user)){
             return response()-> json(['message' =>'User introuvable'],404);
        }
         return response()->json(User::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateUser(Request $request, $id)
    {
      if(User::where('id',$id)->exists()){
            
            $user = User::find($id);
            $destination=public_path("storage\\".$user->photo);
            $filename="";
            if($request->hasFile('photo')){
                if(File::exists($destination)){
                    File::delete($destination);
                }
    
                $filename=$request->file('photo')->store('users','public');
            }else{
                $filename=$request->photo;
            }

            $user->name =$request->name;
            $user->prenom =$request->prenom;
            $user->contact =$request->contact;
            $user->adresse =$request->adresse;
            $user->email =$request->email;
            $user->password =$request->password;
            $user->photo =$filename;
            
            $user->save();
            return response()->json([
                "message" => "User updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "User introuvable"
            ],404);
            }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteUser($id)
    {
        $user= User::find($id);
        if(is_null($user)){
            return response()-> json(['message' =>'User introuvable'],404);
       }
       $destination=public_path("storage\\".$user->photo);
       if(File::exists($destination)){
           File::delete($destination);
       }

       $user->delete();
        return response(null,204);

    }
}
