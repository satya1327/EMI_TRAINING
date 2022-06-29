import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stored',
  templateUrl: './stored.component.html',
  styleUrls: ['./stored.component.css']
})
export class StoredComponent implements OnInit {
  employeeRecord:any=[];
  constructor() { }

  ngOnInit(): void {
  }

  public storedRecord(event:any){
    console.log(event);
    this.employeeRecord.push(event);


  }
  


}
