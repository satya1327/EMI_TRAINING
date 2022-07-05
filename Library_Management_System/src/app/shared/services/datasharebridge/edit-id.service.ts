import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditIdService {
  subject=new Subject();
  constructor(private http:HttpClient) { }

  public editId(data:number){
    return this.subject.next(data);
  }
}
