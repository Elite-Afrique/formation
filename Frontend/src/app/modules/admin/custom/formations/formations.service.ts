import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';
import { Formation } from './formations.model';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private apiService: ApiService) {}
 
   getCategories(): Observable<any>{
      return this.apiService.get('api/categories/');
    }
    getAll(): Observable<any> {
        return this.apiService.get('api/formations/');
    }

    delete(id:number): Observable<Formation[]> {
        return this.apiService.delete('api/deleteFormation/' + id);
    }

    add(formation: Formation): Observable<Formation> {
        return this.apiService.post('api/addFormation', formation);
    }

    update(formation: Formation): Observable<Formation> {
        return this.apiService.put('api/updateFormation/' + formation.id,formation);
    }

    get(id): Observable<Formation> {
        return this.apiService.get('api/formation/' + id);
    }
}
