import { UserModel } from 'src/Models/UserModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
const api=environment.apiurl;
@Injectable({
  providedIn: 'root'
})



export class DataServicesService {

  constructor(private http:HttpClient) { }
    public postUserData(form:any):Observable<UserModel>{
      return this.http.post<UserModel>(api,form);
    }
}
