import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataServicesService } from './../../../Core/data-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-bills',
  templateUrl: './upload-bills.component.html',
  styleUrls: ['./upload-bills.component.css']
})
export class UploadBillsComponent implements OnInit {
  userid:any;
  status:any;
  uploadForm:FormGroup;
  userDetails:any[]=[];
  constructor(private services:DataServicesService,private fb:FormBuilder) {
    this.services.subject.subscribe(response=>{
      this.userid=response;
      console.log(response);
    });


  }

  ngOnInit(): void {
      this.services.getuserDataById(this.userid).subscribe(response=>{

        this.userDetails.push(response);
        console.log(this.userDetails);
        if(response.approved==true){
          this.status='approved';
        }
      });
      this.uploadForm = this.fb.group({
        spentAmount: ['', [Validators.required]],
        comments: ['', [Validators.required]],

      });

  }

}
