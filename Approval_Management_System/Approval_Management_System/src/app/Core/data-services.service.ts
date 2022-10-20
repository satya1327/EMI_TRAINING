// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { environment } from '../../environments/environment';
// import { Injectable } from '@angular/core';
// import { catchError, Observable, Subject, throwError } from 'rxjs';
// import { requestModel } from 'src/app/Models/Request.model';

// // const api = environment.apiurl;
// @Injectable({
//   providedIn: 'root',
// })
// export class DataServicesService {
//   subject = new Subject();
//   constructor(private http: HttpClient) {}
//   private handleError(errorResponse: HttpErrorResponse) {
//     if (errorResponse.error instanceof ErrorEvent) {
//       console.log('Client Side Error', errorResponse.error);
//     } else {
//       console.log('Server Side Error', errorResponse.error);
//     }
//     return throwError('Their is a problem in ur code');
//   }
//   public postUserData(form: any): Observable<requestModel[]> {
//     return this.http.post<requestModel[]>(api, form);
//   }

//   public getuserData(): Observable<requestModel> {
//     return this.http.get<requestModel>(api);
//   }
//   public getuserDataById(id: number): Observable<requestModel> {
//     const apiByUrl = `${api}/${id}`;
//     return this.http.get<requestModel>(apiByUrl);
//   }
//   public DeleteUserData(id: number): Observable<requestModel> {
//     const apiByUrl = `${api}/${id}`;
//     return this.http.delete<requestModel>(apiByUrl);
//   }
//   public editUserData(id: number, formdata: any): Observable<requestModel> {
//     const editUrl = `${api}/${id}`;
//     return this.http.patch<requestModel>(editUrl, formdata);
//   }
//   public sharedata(data: number) {
//     console.log(data);
//     return this.subject.next(data);
//   }
// }
