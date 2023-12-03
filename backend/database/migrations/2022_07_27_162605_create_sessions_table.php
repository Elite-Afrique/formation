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
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->string("libelle");
            $table->string("date_debut");
            $table->string("date_fin");
            $table->unsignedBigInteger("idProvince");
            $table->unsignedBigInteger("idFormation");
            $table->timestamps();
            $table->foreign("idFormation")->references("id")->on("formations");
            $table->foreign("idProvince")->references("id")->on("provinces");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
};
