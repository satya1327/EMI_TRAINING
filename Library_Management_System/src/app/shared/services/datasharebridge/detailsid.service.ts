import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsidService {
  subject=new Subject();
  constructor(private http:HttpClient) { }

  public detailsId(data:any){

    return this.subject.next(data);
  }
}
