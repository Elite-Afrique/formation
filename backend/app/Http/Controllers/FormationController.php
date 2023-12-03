<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Formation;
class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getFormation()
    {
        $formation = Formation::join('categories','formations.idCategorie', '=', 'categories.id')->get(['formations.*','categories.libelleCategorie']);
        return response()->json( $formation,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addFormation(Request $request)
    {
        $formation = Formation::create($request->all());
        return response($formation,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getFormationById($id)
    {
        $formation=Formation::find($id);
        if(is_null($formation)){
             return response()-> json(['message' =>'Formation introuvable'],404);
        }
         return response()->json(Formation::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateFormation(Request $request, $id)
    {
        if(Formation::where('id',$id)->exists()){
            $formation = Formation::find($id);
            $formation->libelleFormation = $request->libelleFormation;
            $formation->idCategorie = $request->idCategorie;
            $formation->volume_horaire = $request->volume_horaire;
            $formation->duree_formation = $request->duree_formation;
            $formation->nombre_module = $request->nombre_module;
            $formation->prix = $request->prix;
            
            $formation->save();
            return response()->json([
                "message" => "Formation updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "Formation introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteFormation($id)
    {
        $formation= Formation::find($id);
        if(is_null($formation)){
            return response()-> json(['message' =>'Formation introuvable'],404);
       }
       $formation->delete();
        return response(null,204);
    }
}
