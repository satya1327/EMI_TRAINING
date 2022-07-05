import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { AuthenticationService } from './../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private MatDialog:MatDialog,private services:AuthenticationService,private toastr:NotificationService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){

    this.router.navigate(['DashBoard']);
    this.MatDialog.closeAll();
  }

  openDialogSignup(){
    this.MatDialog.open(SignupComponent,{
      width:'400px'
    })
  }
  loginCredential(){
    this.services.authenticateUser(this.loginForm.value);

    this.MatDialog.closeAll();
  }


}
