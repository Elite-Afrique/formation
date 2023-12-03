<?php

namespace App\Models;
use App\Models\Region;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    use HasFactory;
    protected $fillable = ['nom','idRegion'];
    protected $table = 'provinces';

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function participants()
    {
        return $this->hasMany(Participant::class);
    }
}
