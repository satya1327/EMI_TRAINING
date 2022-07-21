import { requestModel } from 'src/app/Models/RequestModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataServicesService } from '../../../Core/data-services.service';
import { NotificationService } from '../../../Core/notification.service';

@Component({
  selector: 'app-create-request-form',
  templateUrl: './create-request-form.component.html',
  styleUrls: ['./create-request-form.component.css'],
})
export class CreateRequestFormComponent implements OnInit {
  firstName: any = localStorage.getItem('AdminfirstName');
  lastName: any = localStorage.getItem('AdminlastName');
  name: any = this.firstName + this.lastName;
  requestModel=new requestModel();
  approve:any=this.requestModel.approved;
  createForm: FormGroup;
  date = new Date();
  constructor(
    private fb: FormBuilder,
    private toaster: NotificationService,
    private router: Router,
    private services: DataServicesService,
    private matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      purpose: ['', [Validators.required]],
      description: ['', [Validators.required]],
      estimateCost: ['', [Validators.required, Validators.maxLength(5)]],
      approver: ['jurgen', [Validators.required]],
      advanceAmount: ['', [Validators.required]],
      date: ['', [Validators.required]],
      name: [this.name],
      approved:[],
      reject:[],
      comments:[],
    });
    this.createForm.get('approver').setValue('Jurgen');
    this.createForm.get('approved').setValue(false);
    this.createForm.get('reject').setValue(false);
  }

  onSubmit() {
    this.services.postUserData(this.createForm.value).subscribe((data) => {
      console.log(data);
      this.toaster.showSuccess('Request sent successfully', 'Congratulations');
      this.matdialog.closeAll();
      this.createForm.reset();
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    });
  }
}
