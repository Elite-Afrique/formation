<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\ListeDiffusionParticipant;
use Illuminate\Support\Facades\Http;

class SmsController extends Controller
{
    //
    // public function sendSms()
    // {
    //     $client = new Client();
    //     $url = "https://www.aqilas.com/api/v1";

    //     $params = [
    //         //If you have any Params Pass here
    //         "from"=> "Elite Afrique",
    //         "text"=> "Bienvenue à Elite Afrique",
    //         "to"=> [ "+22662634428"]
    //     ];

    //     $headers = [
    //         'api-key' => '398489e0-2285-433a-b8f4-01fc8ba5ea8a'
    //     ];

    //     $response = $client->request('GET', $url, [
    //         // 'json' => $params,
    //         'headers' => $headers,
    //         'verify'  => false,
    //     ]);

    //     $responseBody = json_decode($response->getBody());

    //     return view('projects.apiwithkey', compact('responseBody'));
    // }


    public function sendSms(Request $request){
       // ,$sms_phone

       
        // dd("$sms_text");
        $liste_contact = ListeDiffusionParticipant::join('participants', 'participants.id', '=', 'liste_diffusion_participants.idParticipant')
                            ->join('users', 'users.id', '=', 'participants.idUser')
                            ->join('listes', 'listes.id', '=', 'liste_diffusion_participants.idListe')
                            ->where('listes.id',"=",$request->idListe)
                            ->get('users.contact');
            // if(is_null($liste_contact)){
            // return response()-> json(['message' =>'la liste ne contient aucun participant'],404);
            // }
           // return response()->json($liste_contact);
                //dd("$liste_contact");
 foreach ($liste_contact as $key => $sms_phone) {

        $sms_text = $request->body;
        //dd($sms_phone->contact);
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, env("AQILAS_END_POINT"));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"from\": \"ELITE AFR\",\"text\": \"$sms_text\",\"to\": [\"$sms_phone->contact\"]}");

        $headers = array();
        $headers[] = 'X-Auth-Token: '.env("AQILAS_TOKEN");
        $headers[] = 'Content-Type: application/json';
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $result = curl_exec($ch);
        //dd($result);
        if (curl_errno($ch)) {
            echo 'Error:' . curl_error($ch);
        }
        curl_close($ch);
        
        }
    }
}
