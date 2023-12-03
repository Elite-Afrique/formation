<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Categorie;
use App\Http\Controllers\CategorieController;
use App\Http\Resources\CategorieResource;
use App\Models\Formation;
use App\Http\Controllers\FormationController;
use App\Http\Resources\FormationResource;
use App\Models\Session;
use App\Http\Controllers\SessionController;
use App\Http\Resources\SessionResource;
use App\Models\Fonction;
use App\Http\Controllers\FonctionController;
use App\Http\Resources\FonctionResource;
use App\Models\Pays;
use App\Http\Controllers\PaysController;
use App\Http\Resources\PaysResource;
use App\Models\Region;
use App\Http\Controllers\RegionController;
use App\Http\Resources\RegionResource;
use App\Models\Province;
use App\Http\Controllers\ProvinceController;
use App\Http\Resources\ProvinceResource;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Resources\UserResource;
use App\Models\Personnel;
use App\Http\Controllers\PersonnelController;
use App\Http\Resources\PersonnelResource;
use App\Models\Participant;
use App\Http\Controllers\ParticipantController;
use App\Http\Resources\ParticipantResource;
use App\Models\Role;
use App\Http\Controllers\RoleController;
use App\Http\Resources\RoleResource;
use App\Http\Controllers\Participant_sessionController;
use App\Http\Controllers\ListeController;

use App\Models\PasswordReset;

use App\Http\Controllers\Api\Auth\VerificationController;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\SmsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');



Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::get('/auth/currentuser', [AuthController::class, 'currentuser']);
Route::get('/auth/refresh-access-token', [AuthController::class, 'refreshAccessToken']);
Route::post('/auth/refresh-access-token', [AuthController::class, 'refreshAccessToken']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/auth/send-verify-mail/{email}',[AuthController::class, 'sendVerifyMail'])->middleware('auth:sanctum');
Route::post('/auth/forget-password',[AuthController::class, 'forgetPassword']);

//Route::get('/email/resend',[VerificationController::class,'resend'])->name('verification.resend')->middleware('auth:sanctum');
//Route::get('/email/verify/{id}/{hash}',[VerificationController::class, 'verify'])->name('verification.verify')->middleware('auth:sanctum');

Route::post('sendSms',[SmsController::class, 'sendSms']);

//get all Categories
Route::get('categories',[CategorieController::class,'getCategorie']);

//get all Categories
Route::get('categorie/{id}',[CategorieController::class,'getCategorieById']);

//add Categorie
Route::post('categories',[CategorieController::class,'addCategorie']); 

//update Categorie by id
Route::put('updateCategorie/{id}',[CategorieController::class,'updateCategorie']);

//delete Categorie by id
Route::delete('deleteCategorie/{id}',[CategorieController::class,'deleteCategorie']);


//get all Formations
Route::get('formations',[FormationController::class,'getFormation']);

//get all Formation
Route::get('formation/{id}',[FormationController::class,'getFormationById']);

//add Formation
Route::post('addFormation',[FormationController::class,'addFormation']); 

//update Formation by id
Route::put('updateFormation/{id}',[FormationController::class,'updateFormation']);

//delete Formation by id
Route::delete('deleteFormation/{id}',[FormationController::class,'deleteFormation']);



//get all Sessions
Route::get('sessions',[SessionController::class,'getSession']);

//get all Session
Route::get('session/{id}',[SessionController::class,'getSessionById']);

//add Session
Route::post('addSession',[SessionController::class,'addSession']); 

//update Session by id
Route::put('updateSession/{id}',[SessionController::class,'updateSession']);

//delete Session by id
Route::delete('deleteSession/{id}',[SessionController::class,'deleteSession']);


//get all Fonctions
Route::get('fonctions',[FonctionController::class,'getFonction']);

//get all Fonction
Route::get('fonction/{id}',[FonctionController::class,'getFonctionById']);

//add Fonction
Route::post('addFonction',[FonctionController::class,'addFonction']); 

//update Fonction by id
Route::put('updateFonction/{id}',[FonctionController::class,'updateFonction']);

//delete Fonction by id
Route::delete('deleteFonction/{id}',[FonctionController::class,'deleteFonction']);


//get all Pays
Route::get('pays',[PaysController::class,'getPays']);

//get all Pays
Route::get('pays/{id}',[PaysController::class,'getPaysById']);

//add Pays
Route::post('addPays',[PaysController::class,'addPays']); 

//update Pays by id
Route::put('updatePays/{id}',[PaysController::class,'updatePays']);

//delete Pays by id
Route::delete('deletePays/{id}',[PaysController::class,'deletePays']);


//get all Regions
Route::get('regions',[RegionController::class,'getRegion']);

//get all Region
Route::get('region/{id}',[RegionController::class,'getRegionById']);

//add Region
Route::post('addRegion',[RegionController::class,'addRegion']); 

//update Region by id
Route::put('updateRegion/{id}',[RegionController::class,'updateRegion']);

//delete Region by id
Route::delete('deleteRegion/{id}',[RegionController::class,'deleteRegion']);


//get all Provinces
Route::get('provinces',[ProvinceController::class,'getProvince']);

//get all Province
Route::get('province/{id}',[ProvinceController::class,'getProvinceById']);

//add Province
Route::post('addProvince',[ProvinceController::class,'addProvince']); 

//update Province by id
Route::put('updateProvince/{id}',[ProvinceController::class,'updateProvince']);

//delete Province by id
Route::delete('deleteProvince/{id}',[ProvinceController::class,'deleteProvince']);


//get all Users
Route::get('users',[UserController::class,'getUser']);

//get all User
Route::get('user/{id}',[UserController::class,'getUserById']);

//add User
Route::post('addUser',[UserController::class,'addUser']); 

//update User by id
Route::post('updateUser/{id}',[UserController::class,'updateUser']);

//delete User by id
Route::delete('deleteUser/{id}',[UserController::class,'deleteUser']);


//get all Personnels
Route::get('personnels',[PersonnelController::class,'getPersonnel']);

//get all Personnel
Route::get('personnel/{id}',[PersonnelController::class,'getPersonnelById']);

//add Personnel
Route::post('addPersonnel',[PersonnelController::class,'addPersonnel']); 

//update Personnel by id
Route::post('updatePersonnel/{id}',[PersonnelController::class,'updatePersonnel']);

//delete Personnel by id
Route::delete('deletePersonnel/{id}',[PersonnelController::class,'deletePersonnel']);


//get all Participant
Route::get('participants',[ParticipantController::class,'getParticipant']);

//get all Participant
Route::get('participants/{id}',[ParticipantController::class,'getParticipantById']);

//add Participant
Route::post('participants',[ParticipantController::class,'addParticipant']); 

//update Participant by id
Route::post('updateParticipant/{id}',[ParticipantController::class,'updateParticipant']);

//delete Participant by id
Route::delete('participants/{id}',[ParticipantController::class,'deleteParticipant']);


//get all Roles
Route::get('roles',[RoleController::class,'getRole']);

//get all Role
Route::get('role/{id}',[RoleController::class,'getRoleById']);

//add Role
Route::post('addRole',[RoleController::class,'addRole']); 

//update Role by id
Route::put('updateRole/{id}',[RoleController::class,'updateRole']);

//delete Role by id
Route::delete('deleteRole/{id}',[RoleController::class,'deleteRole']);

//get AttestationPdf
Route::get('generatePDF/{ids}/{idp}',[ParticipantController::class,'generatePDF']);


//Afficher les sessions de formation d'un participant
Route::get('sessionParticipants',[RoleController::class,'getSessionParticipants']);

//Afficher les sessions de formation d'un participant
Route::get('participant_session/{id}',[Participant_sessionController::class,'getParticipant_sessionById']);

//Afficher les participants d'une session de formation
Route::get('session_participant/{id}',[Participant_sessionController::class,'getSession_participantById']);

//Ajouter une session de formation a un participant
Route::post('addParticipant_session',[Participant_sessionController::class,'addParticipant_session']); 

//Ajouter une session de formation a un participant
//Route::put('updateRole/{id}',[RoleController::class,'updateRole']);

//Ajouter une session de formation a un participant
Route::delete('deleteSessionParticipants/{id}',[RoleController::class,'deleteSessionParticipants']);

//Ajouter une session de formation a un participant
Route::get('valider/{ids}/{idp}',[Participant_sessionController::class,'valider']);

//get Sessions by formations id
Route::get('getSessionByIdFormation/{id}',[SessionController::class,'getSessionByIdFormation']);

//Ajouter une liste de diffusion
Route::post('addListe',[ListeController::class,'addListe']); 

//get les listes de diffusion
Route::get('listes',[ListeController::class,'getListe']);

//get liste by id
Route::get('liste/{id}',[ListeController::class,'getListeById']);

//Ajouter un Participant à une liste de diffusion 
Route::post('addListe_participant',[ListeController::class,'addListe_participant']);

//Afficher les participants d'une session de formation
Route::get('liste_participant/{id}',[ListeController::class,'getListe_participantById']);




