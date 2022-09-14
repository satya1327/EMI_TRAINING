import { UploadBillsComponent } from './../upload-bills/upload-bills.component';

import { Router } from '@angular/router';
import { EditRequestComponent } from '../../User/edit-request/edit-request.component';
import { NotificationService } from 'src/app/Core/notification.service';
import { DataServicesService } from 'src/app/Core/data-services.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { requestModel } from 'src/app/Models/Request.model';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css'],
})
export class MyRequestComponent implements OnInit {
  firstName: any = localStorage.getItem('firstName');
  lastName: any = localStorage.getItem('lastName');
  name: any = this.firstName + this.lastName;

  myRequestList: any;
  constructor(
    private getservice: DataServicesService,
    private toaster: NotificationService,
    private matdialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getservice.getuserData().subscribe((response) => {
      this.myRequestList = response;
    });
    this.getservice.subject.subscribe((resposne) => {
      console.log(resposne);
    });
  }

  deleteCart(id: number) {
    this.getservice.DeleteUserData(id).subscribe((response) => {
      let deleteItem = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([deleteItem]);
      this.toaster.showWarning('Congratulation', 'SuccessFully Deleted');
    });
  }
  openEditDialog(id: any) {
    this.matdialog.open(EditRequestComponent, {
      width: '450px',
    });

    this.getservice.sharedata(id);
  }
  openUploadDialog(id: any) {
    this.matdialog.open(UploadBillsComponent, {
      width: '450px',
    });
    this.getservice.sharedata(id);
  }
}
