<?php

namespace App\Models;
use App\Models\Formation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;
    protected $fillable = ['libelle','idFormation','date_debut','date_fin','idProvince'];
    protected $table = 'sessions';

    public function formation()
    {
        return $this->belongsTo(Formation::class);
    }
    
    public function participants()
    {
        return $this->hasMany(Participant::class);
    }

}
