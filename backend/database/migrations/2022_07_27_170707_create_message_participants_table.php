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
        Schema::create('message_participants', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->unsignedBigInteger('idParticipant');
            $table->unsignedBigInteger('idMessage');
            $table->timestamps();
            $table->foreign("idParticipant")->references("id")->on("participants");
            $table->foreign("idMessage")->references("id")->on("messages");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('message_participants');
    }
};
