<?php

namespace App\Models;
use App\Models\Pays;
use App\Models\Province;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;
    protected $fillable = ['nomRegion','idPays'];
    protected $table = 'regions';

    public function pays()
    {
        return $this->belongsTo(Pays::class);
    }

    public function provinces()
    {
        return $this->hasMany(Province::class);
    }
}
