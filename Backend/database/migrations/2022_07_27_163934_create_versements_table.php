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
        Schema::create('versements', function (Blueprint $table) {
            $table->id();
            $table->string('montant');
            $table->string('montant_total_verse');
            $table->string('montant_restant');
            $table->date('date_versement');
            $table->unsignedBigInteger('idParticipant');
            $table->unsignedBigInteger('idSession');
            $table->timestamps();
            $table->foreign("idParticipant")->references("id")->on("participants");
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
        Schema::dropIfExists('versements');
    }
};
