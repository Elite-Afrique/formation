<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListeDiffusionParticipant extends Model
{
    use HasFactory;
    protected $fillable = ['idParticipant','idListe'];
    protected $table = 'liste_diffusion_participants';
}
