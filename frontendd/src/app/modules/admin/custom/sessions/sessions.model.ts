export class Session {
    
    id:number
    libelle:string
    date_debut:string
    date_fin:string
    idProvince:number
    idFormation:number
    nom:string
    libelleFormation:string


    constructor(session){

        this.id = session.id
        this.libelle = session.libelle
        this.date_debut = session.date_debut
        this.date_fin = session.date_fin
        this.idProvince = session.idProvince
        this.idFormation = session.idFormation  
        
    }
}