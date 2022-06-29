
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';
import { employee } from '../../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private  url='/assets/employee.json'
  constructor(private http:HttpClient) { }

  employeedata:any;

  public getAllEmployee():Observable<employee[]>{

   return this.http.get<employee[]>(this.url);



  }
}
