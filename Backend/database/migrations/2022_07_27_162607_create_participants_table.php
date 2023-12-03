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
        Schema::create('participants', function (Blueprint $table) {
            $table->id();
            $table->string('profession')->nullable();
            $table->string('date_naissance')->nullable();
            $table->string('lieu_naissance')->nullable();
            $table->string('Pays_naissance')->nullable();
            $table->string('numero_cnib')->nullable();
            $table->string('date_etablissement')->nullable();
            $table->string('lieu_etablissement')->nullable();
            $table->string('dernier_diplome')->nullable();
            $table->unsignedBigInteger('idProvince')->nullable();
            $table->unsignedBigInteger('idUser')->nullable();
            $table->unsignedBigInteger('idSession')->nullable();
            $table->timestamps();
            $table->foreign("idProvince")->references("id")->on("provinces");
            $table->foreign("idUser")->references("id")->on("users");
            $table->foreign("idSession")->references("id")->on("sessions");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('participants');
    }
};
