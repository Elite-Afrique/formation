<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;

class RegionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRegion()
    {
        $region = Region::join('pays','regions.idPays', '=', 'pays.id')->get(['regions.*','pays.nomPays']);
        return response()->json($region,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addRegion(Request $request)
    {
        $region = Region::create($request->all());
        return response($region,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getRegionById($id)
    {
        $region=Region::find($id);
        if(is_null($region)){
             return response()-> json(['message' =>'Region introuvable'],404);
        }
         return response()->json(Region::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateRegion(Request $request, $id)
    {
        if(Region::where('id',$id)->exists()){
            $region = Region::find($id);
            $region->nom = $request->nom;
            $region->idPays = $request->idPays;

            $region->save();
            return response()->json([
                "message" => "Region updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "Region introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteRegion($id)
    {
        $region= Region::find($id);
        if(is_null($region)){
            return response()-> json(['message' =>'Region introuvable'],404);
       }
       $region->delete();
        return response(null,204);
    }
}
