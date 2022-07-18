import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServicesService } from '../../../Core/data-services.service';
import { RejectDialogComponent } from '../../Admin/reject-dialog/reject-dialog.component';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.css']
})
export class AllRequestsComponent implements OnInit {
  firstName:any=localStorage.getItem('AdminfirstName');
  lastName:any=localStorage.getItem('AdminlastName');
  name:any=this.firstName+this.lastName;
  allRequest: any;
  constructor(private userdata: DataServicesService,private matDialog:MatDialog) {}
  ngOnInit(): void {
    this.userdata.getuserData().subscribe((response: any) => {
      this.allRequest=response;
    });
  }
  openRejectDialog(){
    this.matDialog.open(RejectDialogComponent,{
      width:'400px'
    })
  }
}
