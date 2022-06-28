import { NotificationService } from './../../../shared/Services/notification.service';
import { DataServicesService } from './../../../shared/Services/data-services.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/Models/UserModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ApprovalFormDetails:FormGroup;
  userModel=new UserModel();
  currentDate:any=new Date();
  constructor(private formbuilder:FormBuilder,private dataservices:DataServicesService,private toast:NotificationService) { }

  ngOnInit(): void {
    this.ApprovalFormDetails=this.formbuilder.group({
      purpose:['',[Validators.required]],
      description:['',[ Validators.required]],
      approver:['Jurgen'],
      estimateCost:['',[Validators.required]],
      advanceAmount:['',[Validators.required,Validators.maxLength(5)]],
      date:['',[Validators.required]]
    });
    this.ApprovalFormDetails.controls['approver'].setValue('Jurgen')


  }

  onSubmit(){
    this.dataservices.postUserData(this.ApprovalFormDetails.value).subscribe(data=>{

        this.toast.showSuccess("Data saved","Posted");
        this.ApprovalFormDetails.reset();

       });
    }
    cancelForm(){
      location.reload();
    }



}
