import { Cart } from './../../../models/Cart';

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
  public postCartItems(data:any):Observable<Cart[]>{
    return this.http.post<Cart[]>(url,data);

  }
  public getCartItems():Observable<Cart>{
    return this.http.get<Cart>(url);
  }

}
