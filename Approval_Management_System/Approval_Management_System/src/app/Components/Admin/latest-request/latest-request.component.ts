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
  constructor(private userdata: DataServicesService,private matDialog:MatDialog) {}
  ngOnInit(): void {
    this.userdata.getuserData().subscribe((response: any) => {
      this.latestRequest = Object.values(response).reverse().slice(0, 3);
    });
  }
  openRejectDialog(){
    this.matDialog.open(RejectDialogComponent,{
      width:'400px'
    })
  }
}
