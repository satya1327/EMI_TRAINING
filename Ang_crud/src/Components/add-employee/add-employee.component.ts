import { MatDialog } from '@angular/material/dialog';
import { DatashareService } from './../../shared/Services/datashare.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  dateCreated:any=new Date();
  EmployeeDetails:FormGroup;
  formdata:any=[];

  constructor( private formbuilder:FormBuilder,private service:DatashareService,private MatDialog:MatDialog) { }


  ngOnInit(): void {
    this.EmployeeDetails=this.formbuilder.group({
      id:['',[Validators.required]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      dateCreated:['',[Validators.required]],
      permanentLink:['',[Validators.required]]
    });


  }

  onsubmit(){
  this.formdata.push(this.EmployeeDetails.value);
  console.log(this.formdata);
  this.service.sharedata(this.formdata);
  alert("data Added Successfully");
    this.EmployeeDetails.reset();
  this.MatDialog.closeAll();
  }
onclose(){
  this.MatDialog.closeAll();
}
}
