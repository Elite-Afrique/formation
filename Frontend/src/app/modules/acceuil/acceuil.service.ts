import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {

  constructor(private apiService: ApiService) {}

  get(id): Observable<any> {
    return this.apiService.get('api/getSessionByIdFormation/' + id);
  }
}
