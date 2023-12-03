<?php

namespace App\Models;
use App\Models\Region;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pays extends Model
{
    use HasFactory;
    protected $fillable = ['nomPays'];
    protected $table = 'pays';

    public function regions()
    {
        return $this->hasMany(Region::class);
    }
}
