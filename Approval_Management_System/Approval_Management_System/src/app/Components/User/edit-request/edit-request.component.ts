import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataServicesService } from '../../../Core/data-services.service';
import { NotificationService } from '../../../Core/notification.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css'],
})
export class EditRequestComponent implements OnInit {
  id: any;
  editForm: FormGroup;
  date = new Date();
  constructor(
    private fb: FormBuilder,
    private toaster: NotificationService,
    private router: Router,
    private services: DataServicesService,
    private matdialog: MatDialog
  ) {
    this.services.subject.subscribe((data) => {
      this.id = data;
    });
      this.editForm = this.fb.group({
        purpose: ['', [Validators.required]],
        description: ['', [Validators.required]],
        estimateCost: ['', [Validators.required]],
        approver: ['jurgen', [Validators.required]],
        advanceAmount: ['', [Validators.required]],
        date: ['', [Validators.required]],
      });
      this.editForm.get('approver').setValue('Jurgen');
    }

    ngOnInit(): void {
      this.services.getuserDataById(this.id).subscribe((response) => {
        console.log(response);
        this.editForm = this.fb.group({
          purpose: [response['purpose']],
          description: [response['description']],
          estimateCost: [response['estimateCost']],
          approver: [response['approver']],
          advanceAmount: [response['advanceAmount']],
          date: [response['date']],
        });
      });
    }
  onSubmit() {
    this.services
      .editUserData(this.id, this.editForm.value)
      .subscribe((data) => {

        this.matdialog.closeAll();
        this.editForm.reset();
        let currentUrl=this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);


      });
      this.toaster.showSuccess('Congratulations','updated successfully')


  }
}
