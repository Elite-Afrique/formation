<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name, 
            'prenom' => $this->prenom,
            'contact' => $this->contact,
            'adresse' => $this->adresse,
            'email' => $this->email,
            'password' => $this->password,
            'photo' => $this->photo,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
