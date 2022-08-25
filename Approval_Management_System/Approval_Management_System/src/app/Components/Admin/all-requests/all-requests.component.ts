import { NotificationService } from './../../../Core/notification.service';
import { Route, Router } from '@angular/router';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { requestModel } from 'src/app/Models/Request.model';
import { DataServicesService } from '../../../Core/data-services.service';
import { RejectDialogComponent } from '../../Admin/reject-dialog/reject-dialog.component';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {
    status:any="initiated";
  firstName:any=localStorage.getItem('AdminfirstName');
  lastName:any=localStorage.getItem('AdminlastName');
  name:any=this.firstName+this.lastName;
  allRequest: any;
  requestModel:requestModel;

  constructor(private userdata: DataServicesService,private matDialog:MatDialog,private route:Router,private toaster:NotificationService) {}
  ngOnInit(): void {
    this.userdata.getuserData().subscribe((response: any) => {
      this.allRequest=response.filter((item:any)=>item.approved==false && item.reject==false);
    });
  }
  openRejectDialog(){
    this.matDialog.open(RejectDialogComponent,{
      width:'400px'
    })
  }
  approved(id:number)
  {

    this.userdata.getuserDataById(id).subscribe(response=>{
      response.approved=true;
      response.reject=false;

    this.userdata.editUserData(id,response).subscribe(res=>{
      console.log(res);
      let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
    });
    this.toaster.showSuccess("Approved","congratulations");

    })
  }
  rejected(id:any){
    this.userdata.getuserDataById(id).subscribe(response=>{
      response.reject=true;
      response.approved=false;

    });
      this.userdata.sharedata(id);

  }
}
