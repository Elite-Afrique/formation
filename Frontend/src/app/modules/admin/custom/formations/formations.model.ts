export class Formation {
    id:number
    libelleFormation:string
    volume_horaire:number
    nombre_module:number
    duree_formation:number
    prix:number
    idCategorie:number
    description:string


    constructor(formation){
        this.id = formation.id
        this.libelleFormation = formation.libelleFormation 
        this.volume_horaire = formation.volume_horaire
        this.nombre_module = formation.nombre_module
        this.duree_formation = formation.duree_formation
        this.prix = formation.prix 
        this.idCategorie = formation.idCategorie
        this.description = formation.description
    }
}