import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';
import { Liste } from './messages.model';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
 
  constructor(private apiService: ApiService) { }

  getAll(): Observable<any> {
    return this.apiService.get('api/listes/');
  }

  get(id:number): Observable<any> {
    return this.apiService.get('api/liste/'+ id);
  }

  add(liste: Liste): Observable<Liste> {
      return this.apiService.post('api/addListe', liste);
  }

  update(liste: Liste): Observable<Liste> {
    return this.apiService.post('api/addListe', liste);
  }

  addParticipantListe(listeParticipant): Observable<any>{
    return this.apiService.post('api/addListe_participant', listeParticipant);
  }

  getListe_Participant(id:number){
    return this.apiService.get('api/liste_participant/'+ id);
  }

  getParticipant(): Observable<any> {
    return this.apiService.get('api/participants/');
  }

  envoyer(message): Observable<any>{
    return this.apiService.post('api/sendSms',message);
  }

  
}
