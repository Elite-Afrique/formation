import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';
import { Participant } from './participant.model';

@Injectable({
    providedIn: 'root',
})
export class ParticipantService {
    constructor(private apiService: ApiService) {}
 

    getAll(): Observable<any> {
        return this.apiService.get('api/participants/');
    }

    delete(participant: Participant): Observable<Participant[]> {
        return this.apiService.delete('api/participants/' + participant.id);
    }

    add(participant: Participant): Observable<Participant> {
        return this.apiService.post('api/participants', participant);
    }

    update(id:number,participant: Participant): Observable<Participant> {
        return this.apiService.post('api/updateParticipant/' + id,participant);
    }

    get(id): Observable<Participant> {
        return this.apiService.get('api/participants/' + id);
    }

    //Afficher sessions dans ajouter ParticipantSession
    getSessions(){
        return this.apiService.get('api/sessions/');
    }

    //participants_Session
    getParticipants_Session(id): Observable<Participant> {
        return this.apiService.get('api/participant_session/' + id);
    }

    addPartSession(participantSession):Observable<any>{
        return this.apiService.post('api/addParticipant_session/',participantSession);
    }
    
    //Valider session de formation d'un participant
    valider(ids:number , idp:number){
        return this.apiService.get('api/valider/'+ ids + "/"+idp);
    }
}
