<?php

namespace App\Http\Controllers;

use App\Models\Personnel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class PersonnelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPersonnel()
    {
       $personnel = Personnel::join('fonctions','personnels.idFonction', '=', 'fonctions.id')
                            ->join('users', 'personnels.idUser', '=', 'users.id')
                            ->join('roles','users.idRole', '=', 'roles.id')
                            ->get(['personnels.*','users.name','users.prenom','users.contact','users.adresse','users.email','users.password','users.idRole','users.photo','roles.libelleRole','fonctions.libelleFonction']);
        return response()->json($personnel,200);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addPersonnel(Request $request)
    {
        try {
            //Validated
            $validatePersonnel = Validator::make($request->all(), 
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                'prenom' => 'required',
                'contact' => 'required',
                'adresse' => 'required',
                //'idRole' => 'required',
                'photo' => 'required',
                //'idFonction' => 'required'
            ]);

            if($validatePersonnel->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validatePersonnel->errors()
                ], 401);
            }

            $filename="";
            if($request->photo){
                $filename=$request->file('photo')->store('users','public');
             }else{
                $filename=Null;
            }
            $user = User::create([
                'name' => $request->name,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'adresse' => $request->adresse,
                'genre' => $request->genre,
                'contact' => $request->contact,
                'photo' => $filename,
                'idRole' =>$request->idRole,
                'password' => Hash::make($request->password)
            ]);

            $personnel = Personnel::create([
                'idUser' => $user->id,
                'idFonction'=>$request->idFonction
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Personnel Created Successfully',
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getPersonnelById($id)
    {
       
        $personnel=Personnel::join('fonctions','personnels.idFonction', '=', 'fonctions.id')
                                ->join('users', 'personnels.idUser', '=', 'users.id')
                                ->join('roles','users.idRole', '=', 'roles.id')
                                ->where('personnels.id',"=",$id)
                                ->firstOrFail(['personnels.*','users.name','users.prenom','users.contact','users.adresse','users.email','users.password','users.idRole','users.photo','users.genre','roles.libelleRole','fonctions.libelleFonction']);
        if(is_null($personnel)){
             return response()-> json(['message' =>'Personnel introuvable'],404);
        }
         return response()->json( $personnel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePersonnel(Request $request, $id)
    {
        if(Personnel::where('id',$id)->exists()){
            $personnel = Personnel::find($id);
            //$personnel->idUser = $request->idUser;
            //$personnel->idFonction = $request->idFonction;

            $personnel->save();

            $filename="";
            if($request->photo){
                $filename=$request->file('photo')->store('users','public');
             }else{
                $filename=Null;
            }

            $util=$personnel->idUser;
            $user=User::find($util);
            $user->name =$request->name;
            $user->prenom =$request->prenom;
            $user->contact =$request->contact;
            $user->genre =$request->genre;
            $user->adresse =$request->adresse;
            $user->email =$request->email;
            $user->password =$request->password;
            $user->idRole =$request->idRole;
            $user->photo =$filename;

            $user->save();
            
            return response()->json([
                "message" => "personnel updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "personnel introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePersonnel($id)
    {
        $personnel= Personnel::find($id);
        if(is_null($personnel)){
            return response()-> json(['message' =>'personnel introuvable'],404);
       }

       $util=$personnel->idUser;
       $user=User::find( $util);
      
       $personnel->delete();
       $user->delete();

        return response(null,204);
    }

}
