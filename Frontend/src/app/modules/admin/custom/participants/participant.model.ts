export class Participant {
    id:number
    prenom:string
    datenaissance:string
    genre:'HOMME'|'FEMME';
    telephone:string ;
    email?:string;
    name?:string;
    password?:string;
    contact?:string;

    adresse?:string;
    idRole?:string;
    photo?:string;
    profession?:string;
    date_naissance?:string;
    lieu_naissance?:string;
    Pays_naissance?:string;
    numero_cnib?:string;
    date_etablissement?:string;
    lieu_etablissement?:string;
    dernier_diplome?:string;
    idProvince?:string;
    idSession?:string;

    constructor(participant){
        this.id = participant.id
        this.name = participant.name
        this.prenom = participant.prenom
        this.datenaissance = participant.datenaissance
        this.genre = participant.genre
        this.contact = participant.contact
        this.email = participant.email
        this.photo = participant.photo
        this.profession = participant.profession

        this.password = participant.password
        this.adresse = participant.adresse
        this.idRole = participant.idRole
        this.date_naissance = participant.date_naissance
        this.lieu_naissance = participant.lieu_naissance
        this.Pays_naissance = participant.Pays_naissance
        this.numero_cnib = participant.numero_cnib
        this.date_etablissement = participant.date_etablissement
        this.lieu_etablissement = participant.lieu_etablissement
        this.dernier_diplome = participant.dernier_diplome
        this.idProvince = participant.idProvince
        this.idSession = participant.idSession
       
    }
}
