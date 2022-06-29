import { Component, OnInit } from '@angular/core';
import { ServiceeService } from 'src/servicee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private comm:ServiceeService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  senddata(data:any){
    this.comm.gettheServiceData(data.value);
  }

}
