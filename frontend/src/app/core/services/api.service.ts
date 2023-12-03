import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor( private _httpClient: HttpClient){

    }
    post(url:string, data:any): Observable<any>{
      
      return this._httpClient.post(environment.urlApi+url,data);
    }
    postT<T>(url:string, data:any): Observable<T>{
      
      return this._httpClient.post<T>(environment.urlApi+url,data);
    }
    patchT<T>(url:string, data:any): Observable<T>{
      
      return this._httpClient.patch<T>(environment.urlApi+url,data);
    }
    patch(url:string, data:any): Observable<any>{
      
      return this._httpClient.patch<any>(environment.urlApi+url,data);
    }
    
    put(url:string, data:any): Observable<any>{
      
      return this._httpClient.put(environment.urlApi+url,data);
    }
    get(url:string): Observable<any>{
      return this._httpClient.get(environment.urlApi+url);
    }

    getT<T>(url: string):Observable<T> {
      return this._httpClient.get<T>(environment.urlApi+url);
    }

    delete(url:string): Observable<any>{
      return this._httpClient.delete(environment.urlApi+url);
    }

    deleteT<T>(url:string): Observable<T>{
      return this._httpClient.delete<T>(environment.urlApi+url);
    }

    deleteTT<T>(url:string,id): Observable<T>{
      return this._httpClient.delete<T>(environment.urlApi+url,{params: {id}});
    }
    
    post2(url:string, data:any): Observable<any>{
      console.log(url)
      return this._httpClient.post(url,data,{responseType: 'blob',reportProgress:true});
    }

}
