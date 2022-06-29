import { ServiceeService } from './../servicee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:any;
  constructor(private comm:ServiceeService){

  }
  ngOnInit(): void {
    this.comm.service.subscribe(data=>{
      this.name=data;
    })
  }




}
