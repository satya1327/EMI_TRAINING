import { DesignServiceService } from './../../design-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  exclusive:any;
  constructor(private designservice:DesignServiceService) { }

  ngOnInit(): void {
  this.designservice.exclusive.subscribe((data:boolean)=>{
    this.exclusive=data;
    console.log(this.exclusive);

  });
  }

}
