<?php

namespace App\Models;

use App\Models\Categorie;
use App\Models\Session;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;
    protected $fillable = ['libelleFormation','idCategorie','volume_horaire','duree_formation','nombre_module','prix','description'];
    protected $table = 'formations';

    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    public function sessions()
    {
        return $this->hasMany(Session::class);
    }
}
