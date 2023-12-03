<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Session;
class SessionController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSession()
    {
        $session = Session::join('formations','sessions.idFormation', '=', 'formations.id')
                            ->join('provinces','sessions.idProvince', '=', 'provinces.id')
                            ->get(['sessions.*','formations.libelleFormation','provinces.nom']);
        return response()->json($session,200);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addSession(Request $request)
    {
        $session = Session::create($request->all());
        return response($session,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getSessionById($id)
    {
        $session=Session::join('formations','sessions.idFormation', '=', 'formations.id')
                            ->join('provinces','sessions.idProvince', '=', 'provinces.id')
                            ->where('sessions.id',"=",$id)
                            ->firstOrFail(['sessions.*','formations.libelleFormation','provinces.nom']);

        if(is_null($session)){
             return response()-> json(['message' =>'Session introuvable'],404);
        }
         return response()->json($session);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateSession(Request $request, $id)
    {
        if(Session::where('id',$id)->exists()){
            $session = Session::find($id);
            $session->libelle = $request->libelle;
            $session->idFormation = $request->idFormation;
            $session->date_debut = $request->date_debut;
            $session->date_fin = $request->date_fin;
            $session->idProvince = $request->idProvince;
            $session->save();
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
    public function deleteSession($id)
    {
        $session= Session::find($id);
        if(is_null($session)){
            return response()-> json(['message' =>'Session introuvable'],404);
       }
       $session->delete();
        return response(null,204);
    }

    //get Sessions by formations id
    public function getSessionByIdFormation($id){

        $session = Session::join('formations','sessions.idFormation', '=', 'formations.id')
                            ->join('provinces','sessions.idProvince', '=', 'provinces.id')
                            ->where('sessions.idFormation',$id)
                            ->get(['sessions.*','formations.libelleFormation','formations.description','formations.prix','provinces.nom']);
        return response()->json($session,200);

    }
}
