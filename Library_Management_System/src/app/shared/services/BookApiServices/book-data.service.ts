import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { books } from 'src/app/models/books';
import { environment } from 'src/environments/environment';
const url=environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class BookDataService {
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
  constructor(private http:HttpClient){

   }
   public getAllBooks():Observable<books[]>{
   return this.http.get<books[]>(url);
   }
   public getBookById(id:number):Observable<books>{
    const urlById=`${url}/${id}`;
    return this.http.get<books>(urlById).pipe(catchError(this.handleError));
  }

  public addBooks(books:any):Observable<books[]>{
    return this.http.post<books[]>(url,books);
  }
  public deleteBook(id:any):Observable<books>{
    const urlById=`${url}/${id}`;
    return this.http.delete<books>(urlById).pipe(catchError(this.handleError));
  }
  public editBook(id:number,books:any):Observable<books>{
    const urlById=`${url}/${id}`;
    return this.http.patch<books>(urlById,books);
  }

}
