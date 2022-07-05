import { environment } from 'src/environments/environment';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { users } from 'src/app/models/users';
const url=environment.userbaseurl
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
  addUser(data:any):Observable<users>{
      return this.http.post<users>(url,data);
  }

}
