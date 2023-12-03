<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Liste;
use App\Models\ListeDiffusionParticipant;

class ListeController extends Controller
{
    //

    public function getListe()
    {
        return response()->json(Liste::all(),200);
    }

    public function addListe(Request $request)
    {
        $liste = Liste::create($request->all());
        return response($liste,201);
    }

    public function getListeById($id)
    {
        $liste=Liste::find($id);
        if(is_null($liste)){
             return response()-> json(['message' =>'liste introuvable'],404);
        }
         return response()->json(Liste::find($id));
    }

    public function addListe_participant(Request $request)
    {
        $liste_participant = ListeDiffusionParticipant::create([
            'idParticipant'=>$request->idParticipant,
            'idListe'=>$request->idListe
        ]);

        return response($liste_participant,201);
    }


    //Afficher les participants dans une liste de diffusion

    public function getListe_participantById($id)
    {
        $liste_participant = ListeDiffusionParticipant::join('participants', 'participants.id', '=', 'liste_diffusion_participants.idParticipant')
                            ->join('users', 'users.id', '=', 'participants.idUser')
                            ->join('listes', 'listes.id', '=', 'liste_diffusion_participants.idListe')
                            ->where('listes.id',"=",$id)
                            ->get(['users.*']);
        if(is_null($liste_participant)){
             return response()-> json(['message' =>'la liste ne contient aucun participant'],404);
        }
         return response()->json($liste_participant);
    }
}
