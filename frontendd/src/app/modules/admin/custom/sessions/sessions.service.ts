import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';
import { Session } from './sessions.model';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private apiService: ApiService) {}
 
  getFormation(): Observable<any> {
    return this.apiService.get('api/formations/');
  }

  getProvince(): Observable<any> {
    return this.apiService.get('api/provinces/');
  }

  getAll(): Observable<any> {
      return this.apiService.get('api/sessions/');
  }

  delete(session: Session): Observable<Session[]> {
      return this.apiService.delete('api/sessions/' + session.id);
  }

  add(session: Session): Observable<Session> {
      return this.apiService.post('api/addSession', session);
  }

  update(session: Session): Observable<Session> {
      return this.apiService.put('api/updateSession/' + session.id,session);
  }

  get(id): Observable<Session> {
      return this.apiService.get('api/session/' + id);
  }


   //Afficher les participants d'une session de formation
   getSession_Participants(id): Observable<Session> {
    return this.apiService.get('api/session_participant/' + id);
}

}
