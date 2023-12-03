<?php

namespace App\Http\Controllers;

use App\Models\Pays;
use Illuminate\Http\Request;

class PaysController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPays()
    {
        return response()->json(Pays::all(),200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addPays(Request $request)
    {
        $pays = Pays::create($request->all());
        return response($pays,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getPaysById($id)
    {
        $pays=Pays::find($id);
        if(is_null($pays)){
             return response()-> json(['message' =>'Pays introuvable'],404);
        }
         return response()->json(Pays::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePays(Request $request, $id)
    {
        if(Pays::where('id',$id)->exists()){
            $pays = Pays::find($id);
            $pays->nom = $request->nom;

            $pays->save();
            return response()->json([
                "message" => "Pays updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "Pays introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePays($id)
    {
        $pays= Pays::find($id);
        if(is_null($pays)){
            return response()-> json(['message' =>'Pays introuvable'],404);
       }
       $pays->delete();
        return response(null,204);
    }
}
