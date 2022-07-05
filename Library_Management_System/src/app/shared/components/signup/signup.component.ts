
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from './../../services/notification/notification.service';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserCreationService } from '../../services/userCreation/user-creation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private MatDialog:MatDialog,private formBuilder:FormBuilder,private services:UserCreationService,private router:Router,private toaster:NotificationService) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      role:['user'],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  addUser(){
    this.services.addUser(this.signupForm.value).subscribe(response=>{
      console.log(response);
      this.toaster.showSuccess("successfully created","congratulations");
      this.MatDialog.closeAll();

    })


}
}
