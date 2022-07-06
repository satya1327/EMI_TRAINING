import { books } from './../../../models/books';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url=environment.cartbaseurl;
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  public userCartPost(data:any):Observable<books[]>{
    return this.http.post<books[]>(url,data);
  }

}
