import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';
import { Categorie } from './categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<any> {
    return this.apiService.get('api/categories/');
}

delete(categorie: Categorie): Observable<Categorie[]> {
    return this.apiService.delete('api/categories/' + categorie.id);
}

add(categorie: Categorie): Observable<Categorie> {
    return this.apiService.post('api/categories', categorie);
}

update(categorie: Categorie): Observable<Categorie> {
    return this.apiService.put('api/updateCategorie/' + categorie.id,categorie);
}

get(id): Observable<Categorie> {
    return this.apiService.get('api/categorie/' + id);
}
}
