import { DataServicesService } from './../../../Core/data-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-bills',
  templateUrl: './upload-bills.component.html',
  styleUrls: ['./upload-bills.component.css']
})
export class UploadBillsComponent implements OnInit {
  userDeatails:any;
  constructor(private services:DataServicesService) {
    this.services.subject.subscribe(response=>{
      this.userDeatails=response;
      console.log(response);
    })

  }

  ngOnInit(): void {

  }

}
