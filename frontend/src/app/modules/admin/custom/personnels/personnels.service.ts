import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/services/api.service';
import { filter, map, Observable, switchMap, take, tap } from 'rxjs';
import { Personnel } from './personnels.model';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {
 
  constructor(private apiService: ApiService) {}

    getFonction(): Observable<any>{
        return this.apiService.get('api/fonctions/');
    }

    getRole(): Observable<any>{
         return this.apiService.get('api/roles/');
     }
 
    getAll(): Observable<any> {
        return this.apiService.get('api/personnels/');
    }

    delete(id:number): Observable<Personnel[]> {
        return this.apiService.delete('api/deletePersonnel/' + id);
    }

    add(personnel: Personnel): Observable<Personnel> {
        return this.apiService.post('api/addPersonnel', personnel);
    }

    update(id:number ,personnel: Personnel): Observable<Personnel> {
        return this.apiService.post('api/updatePersonnel/' +id,personnel);
    }

    get(id): Observable<Personnel> {
        return this.apiService.get('api/personnel/' + id);
    }


    // uploadAvatar(id: string, avatar: File): Observable<Personnel>
    // {
    //     // return this.personnels$.pipe(
    //     //     take(1),
    //     //     switchMap(personnels => this.apiService.post('api/apps/personnels/avatar', {
    //     //         id,
    //     //         avatar
    //     //     }, {
    //     //         headers: {
    //     //             // eslint-disable-next-line @typescript-eslint/naming-convention
    //     //             'Content-Type': avatar.type
    //     //         }
    //     //     }).pipe(
    //     //         map((updatedPersonnel) => {

    //     //             // Find the index of the updated personnel
    //     //             const index = personnels.findIndex(item => item.id === id);

    //     //             // Update the contact
    //     //             contacts[index] = updatedContact;

    //     //             // Update the contacts
    //     //             this._personnels.next(personnels);

    //     //             // Return the updated contact
    //     //             return updatedContact;
    //     //         }),
    //     //         switchMap(updatedContact => this.personnel$.pipe(
    //     //             take(1),
    //     //             filter(item => item && item.id === id),
    //     //             tap(() => {

    //     //                 // Update the contact if it's selected
    //     //                 this._personnel.next(updatedPersonnel);

    //     //                 // Return the updated Personnel
    //     //                 return updatedPersonnel;
    //     //             })
    //     //         ))
    //     //     ))
    //     // );
    // }
}
