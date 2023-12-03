<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;
class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCategorie()
    {
        return response()->json(Categorie::all(),200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addCategorie(Request $request)
    {
        $categorie = Categorie::create($request->all());
        return response($categorie,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getCategorieById($id)
    {
        $categorie=Categorie::find($id);
        if(is_null($categorie)){
             return response()-> json(['message' =>'Categorie introuvable'],404);
        }
         return response()->json(Categorie::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCategorie(Request $request, $id)
    {
        if(Categorie::where('id',$id)->exists()){
            $categorie = Categorie::find($id);
            $categorie->libelleCategorie = $request->libelleCategorie;

            $categorie->save();
            return response()->json([
                "message" => "Record updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "categorie introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteCategorie($id)
    {
        $categorie= Categorie::find($id);
        if(is_null($categorie)){
            return response()-> json(['message' =>'Categorie introuvable'],404);
       }
       $categorie->delete();
        return response(null,204);
    }
}
