<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string("libelleFormation");
            $table->integer("volume_horaire");
            $table->integer("nombre_module");
            $table->integer("duree_formation");
            $table->double("prix");
            $table->string("description");
            $table->unsignedBigInteger("idCategorie");
            $table->timestamps();
            $table->foreign("idCategorie")->references("id")->on("categories");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('formations');
    }
};
