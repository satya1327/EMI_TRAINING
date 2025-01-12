import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  public userData():Observable<any>{
    return this.http.get<any>('http://localhost:3000/registration');
  }
}
