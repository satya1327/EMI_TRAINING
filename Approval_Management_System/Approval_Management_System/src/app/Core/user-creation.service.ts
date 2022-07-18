import { environment } from '../../environments/environment';
import { authentication } from '../Models/authentication';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

const url=environment.authUrl;
@Injectable({
  providedIn: 'root'
})
export class UserCreationService {

  constructor(private http:HttpClient) { }
  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }

    else
    {
      console.log('Server Side Error',errorResponse.error)
    }
    return throwError('Their is a problem in ur code');
  }

  ngOnInit(): void {
  }
  public addUser(data:any):Observable<authentication[]>{
      return this.http.post<authentication[]>(url,data);
  }


}
