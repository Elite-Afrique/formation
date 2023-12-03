<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant_session;

class Participant_sessionController extends Controller
{
    //Afficher les sessions de formation d'un participant

    public function getParticipant_sessionById($id)
    {
        $participant_session = Participant_session::join('participants', 'participants.id', '=', 'participant_sessions.idParticipant')
                            ->join('sessions', 'sessions.id', '=', 'participant_sessions.idSession')
                            ->join('formations', 'formations.id', '=', 'sessions.idFormation')
                            ->where('participants.id',"=",$id)
                            ->get(['sessions.libelle','sessions.id','sessions.date_debut','sessions.date_fin','formations.libelleFormation','participant_sessions.status']);
        if(is_null($participant_session)){
             return response()-> json(['message' =>'Participant na pas participer a une formation'],404);
        }
         return response()->json($participant_session);
    }

    //Afficher les participants à une session de formation 

    public function getSession_participantById($id)
    {
        $session_participant = Participant_session::join('participants', 'participants.id', '=', 'participant_sessions.idParticipant')
                            ->join('users', 'users.id', '=', 'participants.idUser')
                            ->join('sessions', 'sessions.id', '=', 'participant_sessions.idSession')
                            ->where('sessions.id',"=",$id)
                            ->get(['users.*','participant_sessions.status']);
        if(is_null($session_participant)){
             return response()-> json(['message' =>'Participant na pas participer a une formation'],404);
        }
         return response()->json($session_participant);
    }

    //
    public function addParticipant_session(Request $request)
    {
        $participant_session = Participant_session::create([
            'status'=> 'Non valide',
            'idParticipant'=>$request->idParticipant,
            'idSession'=>$request->idSession
        ]);
        return response($participant_session,201);
    }

    public function valider($idS,$idP){
        
        $participant_session  = Participant_session::where('participant_sessions.idParticipant',$idP)
            ->where('participant_sessions.idSession',$idS)->first();
        //dd($participant_session);
            $participant_session->status = "Valider";
            $participant_session->save();
        }
           
}
