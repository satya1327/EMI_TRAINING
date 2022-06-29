import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceeService {
 
 
  service=new BehaviorSubject<string>('satya');
 
 
  constructor(private httpClient:HttpClient) { }
 
 
  gettheServiceData(data:any){
    return this.service.next(data);
  }
}
