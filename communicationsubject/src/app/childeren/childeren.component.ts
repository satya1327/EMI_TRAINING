import { ServiceeService } from './../../servicee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childeren',
  templateUrl: './childeren.component.html',
  styleUrls: ['./childeren.component.css']
})
export class ChilderenComponent implements OnInit {
  name:any;
  constructor(private comm:ServiceeService) { }

  ngOnInit(): void {
    this.comm.service.subscribe(data=>{
      this.name=data;
    })
  }

}
