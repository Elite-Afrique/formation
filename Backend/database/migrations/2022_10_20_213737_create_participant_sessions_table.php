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
        Schema::create('participant_sessions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("idSession");
            $table->unsignedBigInteger("idParticipant");
            $table->string("status");
            $table->timestamps();
            $table->foreign("idSession")->references("id")->on("sessions");
            $table->foreign("idParticipant")->references("id")->on("participants");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('participant_sessions');
    }
};
