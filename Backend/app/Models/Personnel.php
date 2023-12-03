<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personnel extends Model
{
    use HasFactory;
    protected $fillable = ['idFonction','idUser'];
    protected $table = 'personnels';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function fonction()
    {
        return $this->belongsTo(Fonction::class);
    }
}
