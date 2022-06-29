import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {
  empName=new BehaviorSubject('satyajit');
  videoEmit=new ReplaySubject<string>(3,5000);
  exclusive=new Subject<boolean>();
  constructor() { }

}
