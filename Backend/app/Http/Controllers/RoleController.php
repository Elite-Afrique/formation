<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRole()
    {
        return response()->json(Role::all(),200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addRole(Request $request)
    {
        $role = Role::create($request->all());
        return response($role,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getRoleById($id)
    {
        $role=Role::find($id);
        if(is_null($role)){
             return response()-> json(['message' =>'Role introuvable'],404);
        }
         return response()->json(Role::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateRole(Request $request, $id)
    {
        if(Role::where('id',$id)->exists()){
            $role = Role::find($id);
            $role->libelleRole = $request->libelleRole;

            $role->save();
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
    public function deleteRole($id)
    {
        $role = Role::find($id);
        if(is_null($role)){
            return response()-> json(['message' =>'role introuvable'],404);
       }
       $role->delete();
        return response(null,204);
    }
}
