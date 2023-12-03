<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Participant;
use App\Models\Participant_session;
use PDF;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class ParticipantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function  getParticipant()
    {
        $participant = Participant::join('users', 'participants.idUser', '=', 'users.id')
                            ->get(['participants.*','users.name','users.prenom','users.photo','users.contact','users.adresse','users.email','users.password']);
        return response()->json($participant,200);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addParticipant(Request $request)
    {
       /* $user=new User();

        $filename="";
        if($request->hasFile('photo')){
            $filename=$request->file('photo')->store('users','public');
         }else{
            $filename=Null;}
            
            $user->name=$request->name;
            $user->prenom =$request->prenom;
            $user->contact =$request->contact;
            $user->adresse =$request->adresse;
            $user->email =$request->email;
            $user->password =$request->password;
            $user->idRole =2;
            $user->photo=$filename;
        
            $user->save();

            $participant = new Participant();
            $participant->idUser = $user->id;
            $participant->profession = $request->profession;
            $participant->date_naissance = $request->date_naissance;
            $participant->lieu_naissance = $request->lieu_naissance;
            $participant->Pays_naissance = $request->Pays_naissance;
            $participant->numero_cnib = $request->numero_cnib;
            $participant->date_etablissement = $request->date_etablissement;
            $participant->lieu_etablissement = $request->lieu_etablissement;
            $participant->dernier_diplome = $request->dernier_diplome;
            $participant->idProvince = $request->idProvince;
            $participant->idSession = $request->idSession;

        $participant->save();
      return response($participant,201);  */
      
      try {
        //Validated
        $validateParticipant = Validator::make($request->all(), 
        [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'prenom' => 'required',
            // 'contact' => 'required',
            // 'adresse' => 'required',
            // 'idRole' => 'required',
            // 'photo' => 'required',
            // 'profession' => 'required',
            // 'date_naissance' => 'required',
            // 'lieu_naissance' => 'required',
            // 'Pays_naissance' => 'required',
            // 'numero_cnib' => 'required',
            // 'date_etablissement' => 'required',
            // 'lieu_etablissement' => 'required',
            // 'dernier_diplome' => 'required',
            // 'idProvince' => 'required',
            // 'idSession' => 'required'
        ]);

        if($validateParticipant->fails()){
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateParticipant->errors()
            ], 401);
        }

        $filename="";
        if($request->photo){
            $filename=$request->file('photo')->store('users','public');
         }else{
            $filename=Null;
        }
        $user = User::create([
            'name' => $request->name,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'adresse' => $request->adresse,
            'contact' => $request->contact,
            'genre' => $request->genre,
            'photo' => $filename,
            'idRole' =>$request->idRole,
            'password' => Hash::make($request->password)
        ]);

        $participant = Participant::create([
            'idUser' => $user->id,
            'profession'=>$request->profession,
            'date_naissance'=>$request->date_naissance,
            'lieu_naissance'=>$request->lieu_naissance,
            'Pays_naissance'=>$request->Pays_naissance,
            'numero_cnib'=>$request->numero_cnib,
            'date_etablissement'=>$request->date_etablissement,
            'lieu_etablissement'=>$request->lieu_etablissement,
            'dernier_diplome'=>$request->dernier_diplome,
            'idProvince'=>$request->idProvince,
            'idSession'=>$request->idSession
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Participant Created Successfully',
            'token' => $user->createToken("API TOKEN")->plainTextToken
        ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getParticipantById($id)
    {
        $participant = Participant::join('users', 'participants.idUser', '=', 'users.id')
                            ->where('participants.id',"=",$id)
                            ->firstOrFail(['participants.*','users.name','users.prenom','users.photo','users.contact','users.adresse','users.email','users.password','users.genre']);
        if(is_null($participant)){
             return response()-> json(['message' =>'Participant introuvable'],404);
        }
         return response()->json($participant);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateParticipant(Request $request, $id)
    {
        if(Participant::where('id',$id)->exists()){
            $participant = Participant::find($id);
            $participant->profession = $request->profession;
            $participant->date_naissance = $request->date_naissance;
            $participant->lieu_naissance = $request->lieu_naissance;
            $participant->Pays_naissance = $request->Pays_naissance;
            $participant->numero_cnib = $request->numero_cnib;
            $participant->date_etablissement = $request->date_etablissement;
            $participant->lieu_etablissement = $request->lieu_etablissement;
            $participant->dernier_diplome = $request->dernier_diplome;
            $participant->idProvince = $request->idProvince;
            $participant->idSession = $request->idSession;
            
            $participant->save();

            $filename="";
            if($request->hasFile('photo')){
                $filename=$request->file('photo')->store('users','public');
             }else{
                $filename=Null;
            }

            $util=$participant->idUser;
            $user=User::find($util);
            $user->name =$request->name;
            $user->prenom =$request->prenom;
            $user->contact =$request->contact;
            $user->adresse =$request->adresse;
            $user->email =$request->email;
            $user->genre = $request->genre;
            $user->password =Hash::make($request->password);
            $user->photo =$filename;

            $user->save();
            return response()->json([
                "message" => "Participant updated succesfully"
            ],200);
        }else{
            return response()->json([
                "message" => "Participant introuvable"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteParticipant($id)
    {
        $participant= Participant::find($id);
        if(is_null($participant)){
            return response()-> json(['message' =>'Participant introuvable'],404);
       }

       $util=$participant->idUser;
       $user=User::find( $util);

       $participant->delete();
       $user->delete();

        return response(null,204);
    }

    public function generatePDF($idS,$idP)
    {
        //$partic = Participant::find($id);

        $participant = Participant_session::join('sessions','participant_sessions.idSession', '=', 'sessions.id')
                ->join('participants','participant_sessions.idParticipant', '=', 'participants.id')
                ->join('users', 'participants.idUser', '=', 'users.id')
                ->join('formations','sessions.idFormation', '=', 'formations.id')
                ->where('participant_sessions.idParticipant',$idP)
                ->where('participant_sessions.idSession',$idS)
                ->first(['participants.*','users.name','users.prenom','sessions.libelle','formations.libelleFormation']);

       // $participant = Participant::find($id);
        //setLocale(LC_TIME,"French)
        //date('d F Y)
        $data = [
            'title' => 'Welcome to Elite Afrique',
            'date' => date('m/d/Y'),
            'participants' => $participant
        ]; 
      // dd($data);
            
        $pdf = PDF::loadView('attestation', $data)->setPaper('a4', 'landscape');
     
        return $pdf->stream('attestations.pdf');
    }
   
}
