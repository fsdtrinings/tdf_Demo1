import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from './UserDetails';

@Injectable({
  providedIn: 'root'
})
export class MyRestWebServiceService {

  endpoint:string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(public http:HttpClient) { }

  doThings():Observable<UserDetails[]>
  {
    // call webservice 
   return this.http.get<UserDetails[]>(`${this.endpoint}`);
  }


}
