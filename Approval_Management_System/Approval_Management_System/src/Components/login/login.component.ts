import { SecurityService } from './../../shared/Services/security.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NotificationService } from 'src/shared/Services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private loginservices: SecurityService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toaster: NotificationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
          ),
        ],
      ],
    });
  }

  get formlogincontrols() {
    return this.loginForm.controls;
  }
  login() {
    if (
      this.loginservices.user(
        this.formlogincontrols['username'].value,
        this.formlogincontrols['password'].value
      )
    ) {

      this.toaster.showSuccess('Congratulation', 'Logged In as user');
      this.router.navigate(['/UserDashBoard']);
    } else if (
      this.loginservices.Admin(
        this.formlogincontrols['username'].value,
        this.formlogincontrols['password'].value
      )
    ) {
      this.toaster.showSuccess("Congratulation","Logged in as admin");
      this.router.navigate(['/AdminDashboard']);
    } else {
      this.toaster.showError("Login Failed","Alert");
    }
  }
}
