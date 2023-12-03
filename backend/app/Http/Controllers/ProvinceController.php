<?php

namespace App\Http\Controllers;

use App\Models\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getProvince()
    {
        $province = Province::join('regions','provinces.idRegion', '=', 'regions.id')->get(['provinces.*','regions.nomRegion']);
        return response()->json($province,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addProvince(Request $request)
    {
        $province = Province::create($request->all());
        return response($province,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getRegionById($id)
    {
        $province=Province::find($id);
        if(is_null($province)){
             return response()-> json(['message' =>'Province introuvable'],404);
        }
         return response()->json(Province::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateProvince(Request $request, $id)
    {
        if(Province::where('id',$id)->exists()){
            $province = Province::find($id);
            $province->nom = $request->nom;
            $province->idRegion = $request->idRegion;

            $province->save();
            return response()->json([
                "message" => "Province updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "Province introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteProvince($id)
    {
        $province= Province::find($id);
        if(is_null($province)){
            return response()-> json(['message' =>'Province introuvable'],404);
       }
       $province->delete();
        return response(null,204);
    }
}
