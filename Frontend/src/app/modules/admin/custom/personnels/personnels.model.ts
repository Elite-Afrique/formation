export class Personnel {
    id:number
    prenom:string
    genre:'HOMME'|'FEMME';
    telephone:string ;
    email?:string;
    name?:string;
    password?:string;
    contact?:string;
    adresse?:string;
    idRole?:string;
    idFonction?:string;
    photo?:string;
    libelleRole?:string;
    libelleFonction?:string;
    

    constructor(personnel){
        this.id = personnel.id
        this.name = personnel.name
        this.prenom = personnel.prenom
        this.genre = personnel.genre
        this.contact = personnel.contact
        this.email = personnel.email
        this.idFonction = personnel.idFonction
        this.idRole = personnel.idRole
        this.photo = personnel.photo
        this.adresse = personnel.adresse
        this.password = personnel.password
    }
}
