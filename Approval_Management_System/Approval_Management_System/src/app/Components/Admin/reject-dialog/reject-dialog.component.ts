import { NotificationService } from './../../../Core/notification.service';
import { DataServicesService } from 'src/app/Core/data-services.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css']
})
export class RejectDialogComponent implements OnInit {
  RejectForm:FormGroup;

  id:any;

  constructor(private fb:FormBuilder,private mat:MatDialog,private dataService:DataServicesService,private toaster:NotificationService,private route:Router) {

    this.dataService.subject.subscribe(response=>{
      this.id=response;

    })
   }

  ngOnInit(): void {
    this.RejectForm=this.fb.group({
      comments:['',[Validators.required]]
    });
  }
  submitRejectRequest(){

    this.dataService.getuserDataById(this.id).subscribe(response=>{

      response.reject=true;
      response.approved=false;
      response.comments=this.RejectForm.get('comments').value;
      this.dataService.editUserData(this.id,response).subscribe(response=>{

        let currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate([currentUrl]);

      })
    });

    this.mat.closeAll();

    this.toaster.showSuccess("Rejected","congratulations")
  }
  onCancel(){
    this.mat.closeAll();
  }


}
