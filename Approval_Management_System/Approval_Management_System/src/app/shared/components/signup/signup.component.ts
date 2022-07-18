import { NotificationService } from '../../../Core/notification.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserCreationService } from 'src/app/Core/user-creation.service';
import { CustomValidators } from '../../pipes/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserCreationService,
    private toaster: NotificationService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        role: ['user'],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]))).{8,32}$'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: CustomValidators.passwordsMatching }
    );
  }

  onSubmit() {
    this.userServices.addUser(this.signupForm.value).subscribe((resposne) => {
      console.log(resposne);
      this.toaster.showSuccess('user created successfully', 'congratulations');
    });
  }
}
