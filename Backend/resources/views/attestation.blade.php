<!DOCTYPE html>
<html>
<head>
    <title>Laravel 9 Create PDF File using DomPDF Tutorial - LaravelTuts.com</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style type="text/css">
       
        .date{
        position: absolute;
        left: 70%;
        top: 70%;
        }
        .visible-print{
            position: absolute;
            left: 30%;
            top: 80%;
        }
       .attestation{
        position: absolute;
        top: 30%;
        bottom: 70%;
        left: 30%;
       
        text-align:center;

       } 
       .manager{
        text-align:center;
       }
       .Yasya{
        position: absolute;
            left: 85%;
            top: 90%;    
       }
       .adjoint{
        position: absolute;
            left: 75%;
            top: 80%;  
       }
       body{

       }
       .titulaire{
        position: absolute;
            left: 5%;
            top: 85%;
       }

       .logo{
        position: absolute;
        margin-left: 4em;
       }

       .bas{
        position: absolute;
            top: 93%;
            bottom: 7%;
       }
       .gauche{
        position: absolute;
            left: 0%;
            right: 100%;
       }
       .droite{
        position: absolute;
            left: 98%;
            right: 2%;
       }
       .morceau{
        position: absolute;
            left: 100%;
            right: 0%;
            top: 5%;
       }
       .elite {
            position: absolute;
            margin-left: 80%;
            top: 7%;
        }
        .etoile{
        position: absolute;
            margin-left: 83%;
            top: 10%;
       }
       .numero{
        position: absolute;
            margin-left: 75%;
            top: 13%;
       }
       .bv1{
        position: absolute;
            margin-left: 78%;
            top: 16%;
       }
       .bv2{
        position: absolute;
            margin-left: 78%;
            top: 19%;
       }
       .direction{
        position: absolute;
            margin-left: 75%;
            top: 22%;
       }
       .Lgauche{
        position: absolute;
        top: 40%;
        bottom: 60%;
        left: 5%;
       }
       .Ldroite{
        position: absolute;
        top: 40%;
        bottom: 60%;
        left: 80%;
       }
       .vu{
        position: absolute;
        top: 45%;
        bottom: 55%;
        left: 30%;
       }
       .nom{
        position: absolute;
        top: 50%;
        bottom: 50%;
        left: 40%;
       }
       .suivi{
        position: absolute;
        top: 60%;
        bottom: 40%;
        left: 10%;
       }
       
    </style>
</head>
<body>
       
    <div>
        <img src="{{ public_path('haut.png') }}" alt="" > 
    </div>
    <div class="gauche">
        <img src="{{ public_path('gauche.png') }}" alt="" > 
    </div>
    <div class="Lgauche">
        <img src="{{ public_path('SL.png') }}" alt="" style="width: 120px; height: 50px;"> 
    </div>
    <div class="Ldroite">
        <img src="{{ public_path('SL.png') }}" alt="" style="width: 120px; height: 50px;"> 
    </div>
    

    <div class="logo" >
        <img src="{{ public_path('logo.png') }}" alt="" style="width: 200px; height: 100px;">
        <div> <font  size="9pt"><b>Études-Recherches-Formations-Conseils-Consultations</font> </div>
        <div> <font  size="9pt"><b>RCCM BF OUA 2020B5221 |IFU No 00138663F </font> </div>
    </div>
    <div >
                   <div><font class="elite" size="10pt"><b>ÉLITE AFRIQUE </font></div>  
                   <div><font class="etoile" size="10pt"><b>****** </font></div>
                   <div><font class="numero"size="10pt"><b>(+226) 25 36 54 84/ 25 48 27 78</font></div>  
                   <div><font class="bv1" size="10pt"><b>12 BV 30045 Ouaga 12 </font></div> 
                   <div><font class="bv2" size="10pt"><a><b>www.elite-afrique.com</a></font></div>   
                   <div><font class="direction"size="10pt"><a><b>direction.eliteafrique@gmail.com</a></font></div>   
    </div>
    <br>
    <div class="attestation">
            <h2> CERTIFICAT D’EXPERTISE </h2>
            <h6>No2220-EA{{ $participants->id }}</h6>
            <hr width="100%"  style="height: 5px; background: blue;">
    </div>

    <div class="vu"><font size="10pt">Vu le rapport favorable du Comité de Certification attestant que :</font></div>
            <div class="nom">
                <h3>{{ $participants->name }} {{ $participants->prenom }}</h3>
                <div><font size="10pt"> née le {{ $participants->date_naissance }} au {{ $participants->Pays_naissance }}</font></div>
            </div>
            <div class = "suivi"><font size="10pt"> A régulièrement suivi et validé le programme de formation en Gestion de projets et Programmes développé au Burkina Faso, à Ouagadougou, du 28 août au 29 septembre 2022
                    Nombre d’heures suivies : 130 Heures de cours et 32 heures de travail personnel</font>
                    <div><font size="10pt">ÉLITE AFRIQUE lui délivre ce <b> CERTIFICAT D’EXPERTISE</b> en </font>
                    <b>{{ $participants->libelleFormation }}</b> pour servir et valoir ce que de droit.</div>
                    </div>
            
             
        <!-- <div class="manager"> 
            Le Manager Général Adjoint de Elite Afrique atteste que :
           <h3>{{ $participants->name }} {{ $participants->prenom }}</h3> 
                A pris part à la {{ $participants->libelleFormation}}  portant sur :
            <div>
                Les performances dans le montage et la Gestion des Projets avec le logiciel Ms Project
                La collecte et le traitement des données avec Kobo Collect
                La planification opérationnelle d’un projet
                Tenue du 8 au 12 août 2022, à Kombissir.
            </div>
            <div>En foi de quoi, cette attestation de participation lui est délivrée pour servir et valoir ce que de droit.</div>
        </div> -->

    <div class="date">Ouagadougou {{ $date}} </div>

    <div class="titulaire">Signature du titulaire</div>
    <div class="adjoint"><b>Manager Général Adjoint</div>
    <div class="Yasya"><b>Yasya PORGO</div> 

    <div class="visible-print text-center">
    <img src="data:image/png;base64, {{ base64_encode(QrCode::size(100)->generate('http://elite-afrique.com')) }} ">
        
        <p>Scaner le QR Code pour accéder à la page de vérification.</p>
    </div>

    <div class="morceau">
        <img src="{{ public_path('morceau.png') }}" alt="" > 
    </div>
    <div class="droite">
        <img src="{{ public_path('droite.png') }}" alt="" > 
    </div>
    <div class = "bas">
        <img src="{{ public_path('bas.png') }}" alt="" > 
    </div>
    
</body>
</html>