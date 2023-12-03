<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SessionResource extends JsonResource
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
            'libelle' => $this->libelle, 
            'idFormation' => $this->idFormation,
            'date' => $this->date,
            'localite' => $this->localite,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
