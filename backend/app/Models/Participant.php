<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Province;
use App\Models\Session;

class Participant extends Model
{
    use HasFactory;
    protected $fillable = ['profession','date_naissance','lieu_naissance','Pays_naissance','numero_cnib','date_etablissement','lieu_etablissement','dernier_diplome','idProvince','idUser','idSession'];
    protected $table = 'participants';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function province()
    {
        return $this->belongsTo(Province::class);
    }

    public function session()
    {
        return $this->belongsTo(Session::class);
    }
}
