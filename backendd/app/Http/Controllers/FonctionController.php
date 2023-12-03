<?php

namespace App\Http\Controllers;

use App\Models\Fonction;
use Illuminate\Http\Request;

class FonctionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getFonction()
    {
        return response()->json(Fonction::all(),200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addFonction(Request $request)
    {
        $fonction = Fonction::create($request->all());
        return response($fonction,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFonctionById($id)
    {
        $fonction=Fonction::find($id);
        if(is_null($fonction)){
             return response()-> json(['message' =>'Session introuvable'],404);
        }
         return response()->json(Fonction::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateFonction(Request $request, $id)
    {
        if(Fonction::where('id',$id)->exists()){
            $fonction = Fonction::find($id);
            $fonction->libelleFonction = $request->libelleFonction;

            $fonction->save();
            return response()->json([
                "message" => "Record updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "Session introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteFonction($id)
    {
        $fonction= Fonction::find($id);
        if(is_null($fonction)){
            return response()-> json(['message' =>'Fonction introuvable'],404);
       }
       $fonction->delete();
        return response(null,204);
    }
}
