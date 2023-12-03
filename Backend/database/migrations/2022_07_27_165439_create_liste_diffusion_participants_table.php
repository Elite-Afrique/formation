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
        Schema::create('liste_diffusion_participants', function (Blueprint $table) {
            $table->id();
            $table->date('date')->nullable();
            $table->unsignedBigInteger('idParticipant');
            $table->unsignedBigInteger('idListe');
            $table->timestamps();
            $table->foreign("idParticipant")->references("id")->on("participants");
            $table->foreign("idListe")->references("id")->on("listes");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('liste_diffusion_participants');
    }
};
