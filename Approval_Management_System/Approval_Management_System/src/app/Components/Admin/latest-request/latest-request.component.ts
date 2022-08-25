import { NotificationService } from './../../../Core/notification.service';
import { Route, Router } from '@angular/router';
import { RejectDialogComponent } from '../reject-dialog/reject-dialog.component';
import { DataServicesService } from 'src/app/Core/data-services.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-latest-request',
  templateUrl: './latest-request.component.html',
  styleUrls: ['./latest-request.component.css'],
})
export class LatestRequestComponent implements OnInit {
  latestRequest: any;
  status:any="initiated";
  constructor(private userdata: DataServicesService,private matDialog:MatDialog,private route:Router,private toaster:NotificationService) {}
  ngOnInit(): void {
    this.userdata.getuserData().subscribe((response: any) => {
      this.latestRequest = Object.values(response.filter((item:any)=>item.approved==false && item.reject==false)).reverse().slice(0, 3);
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
      this.status="approved";
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
