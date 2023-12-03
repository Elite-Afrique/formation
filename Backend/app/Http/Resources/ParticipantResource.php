<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ParticipantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'profession' => $this->profession, 
            'date_naissance' => $this->date_naissance,
            'lieu_naissance' => $this->lieu_naissance,
            'Pays_naissance' => $this->Pays_naissance,
            'numero_cnib' => $this->numero_cnib,
            'date_etablissement' => $this->date_etablissement, 
            'lieu_etablissement' => $this->lieu_etablissement,
            'dernier_diplome' => $this->dernier_diplome,
            'idProvince' => $this->idProvince,
            'idUser' => $this->idUser,
            'idSession' => $this->idSession
        ];
    }
}
