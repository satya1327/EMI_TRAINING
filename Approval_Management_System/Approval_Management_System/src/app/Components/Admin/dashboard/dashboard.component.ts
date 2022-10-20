import { RequestServicesService } from 'src/app/Core/RequestOperations/CrudOperations/request-services.service';
import { FetchRequestService } from './../../../Core/RequestOperations/FetchOperations/fetch-request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  latestRequest: any;
  totalRequest: any;
  approvedRequest:any;
  rejectRequest:any;
  managerId:any=localStorage.getItem('adminId');

  constructor(private requestDetails: FetchRequestService,private requset: RequestServicesService) { }

  ngOnInit(): void {
    // this.userdata.getuserData().subscribe((response: any) => {
    //   this.latestRequest = Object.values(response.filter((item:any)=>item.approved==false && item.reject==false)).reverse().slice(0, 3).length;
    //   this.totalRequest=Object.values(response.filter((item:any)=>item.approved==false && item.reject==false)).length;
    //   this.approvedRequest=Object.values(response.filter((item:any)=>item.approved==true && item.reject==false)).length;
    //   this.rejectRequest=Object.values(response.filter((item:any)=>item.approved==false && item.reject==true)).length;
    // });

      this.requset.getRequests().subscribe((response: any) => {
        this.totalRequest=response.filter((item:any)=>item.statusName=='pending' && item.managerId==this.managerId ||item.statusName=='forwarded').length;
        console.log(this.totalRequest);
        this.approvedRequest=response.filter((item:any)=>item.statusName=='approve' && item.managerId==this.managerId).length;
        console.log(this.approvedRequest);
        this.rejectRequest=response.filter((item:any)=>item.statusName=='reject' && item.managerId==this.managerId).length;

      });


    //   console.log(response);
    // })
    // this.requestDetails.ApprovedRquestCount().subscribe(response=>{
    //   this.approvedRequest=response;

    //   console.log(response);
    // })
    // this.requestDetails.RejectedRquestCount().subscribe(response=>{
    //   this.rejectRequest=response;

    //   console.log(response);
    // })



  }

}
