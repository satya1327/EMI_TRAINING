import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataServicesService } from '../../../Core/data-services.service';
import { NotificationService } from '../../../Core/notification.service';
import { EditRequestComponent } from '../../User/edit-request/edit-request.component';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {

  firstName:any=localStorage.getItem('AdminfirstName');
  lastName:any=localStorage.getItem('AdminlastName');
  name:any=this.firstName+this.lastName;

 myRequestList: any;
 constructor(
   private getservice: DataServicesService,
   private toaster: NotificationService,
   private matdialog: MatDialog,
   private router:Router
 ) {}

 ngOnInit(): void {
   this.getservice.getuserData().subscribe((response) => {
     this.myRequestList = response;
   });
   this.getservice.subject.subscribe(resposne=>{
     console.log(resposne);
   })
 }

 deleteCart(id: number) {
   this.getservice.DeleteUserData(id).subscribe((response) => {

     let deleteItem=this.router.url;
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



}
