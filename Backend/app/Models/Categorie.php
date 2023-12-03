<?php

namespace App\Models;

use App\Models\Formation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;
    protected $fillable = ['libelleCategorie'];
    protected $table = 'categories';

    public function formations()
    {
        return $this->hasMany(Formation::class);
    }
}
