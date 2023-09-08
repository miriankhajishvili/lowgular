import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.apiUrl

  constructor( private http : HttpClient ) { }


  get<T>(url:string): Observable<T>{
    return this.http.get<T>(this.apiUrl + url)
  }

}
