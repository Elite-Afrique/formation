<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FormationResource extends JsonResource
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
            'idCategorie' => $this->idCategorie,
            'volume_horaire' => $this->volume_horaire,
            'duree_formation' => $this->duree_formation,
            'nombre_module' => $this->nombre_module,
            'prix' => $this->prix,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
