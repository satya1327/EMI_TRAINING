import { carts } from './../../../models/carts';
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
  public postCartItems(data:any):Observable<carts[]>{
    return this.http.post<carts[]>(url,data);

  }
  public getCartItems():Observable<carts>{
    return this.http.get<carts>(url);
  }

}
