import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/Core/data-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latestRequest: any;
  totalRequest: number;
  approvedRequest:any;
  rejectRequest:any;

  constructor(private userdata: DataServicesService) { }

  ngOnInit(): void {
    this.userdata.getuserData().subscribe((response: any) => {
      this.latestRequest = Object.values(response.filter((item:any)=>item.approved==false && item.reject==false)).reverse().slice(0, 3).length;
      this.totalRequest=Object.values(response.filter((item:any)=>item.approved==false && item.reject==false)).length;
      this.approvedRequest=Object.values(response.filter((item:any)=>item.approved==true && item.reject==false)).length;
      this.rejectRequest=Object.values(response.filter((item:any)=>item.approved==false && item.reject==true)).length;
    });
  }

}
