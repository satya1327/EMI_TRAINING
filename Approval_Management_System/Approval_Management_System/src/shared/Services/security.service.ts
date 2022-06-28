import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http:HttpClient) { }

  Admin(username:string,password:string){
      if(username==='admin@euromonitor.com' && password==='Admin@123')
      {
        return true;
      }
      return false;
  }
  user(username:string,password:string){
    if(username==='user@euromonitor.com' && password==='AdminUser@123'){
      return true;
    }
    return false;
  }
}
