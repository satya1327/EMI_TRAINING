import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { Token } from '@angular/compiler';


const usersUrl = environment.authUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  user: any;
  isAuthenticated = false;
  isAdmin = false;
  isUser = false;
  response: any;
  token: any;
  data: any;

  constructor(
    private http: HttpClient,
    private toastr: NotificationService,
    private router: Router
  ) {}
  public authenticateUser(data: any) {
    return this.http.post(usersUrl, data).subscribe({next: (response) => {
      // console.log(response);
      // sessionStorage.setItem('token',this.response.token);

      this.user = response;
      this.token=response;
      sessionStorage.setItem('token', this.user.token);



      console.log(this.user);


      // this.authenticateUsers();
      if (
        this.user.userDetails.roleId === 2 ||
        this.user.userDetails.roleId === 3
      ) {
        console.log(this.user.userDetails.roleId);
        this.isAdmin = true;
        this.isAuthenticated = true;

        this.toastr.showSuccess('logged in successfully', 'congratulations');
        this.router.navigate(['/AdminDashboard/dashboard']);
        localStorage.setItem('adminId',this.user.userDetails.userId);
        localStorage.setItem('AdminfirstName', this.user.userDetails.firstName);
        localStorage.setItem('AdminlastName', this.user.userDetails.lastName);
        localStorage.setItem('adminmanagerId', this.user.userDetails.managerId);
        localStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', this.user.token);



        localStorage.setItem(
          'adminName',
          this.user.userDetails.firstName + ' ' + this.user.userDetails.lastName
        );
      } else if (this.user.userDetails.roleId === 1) {
        this.isUser = true;
        this.isAuthenticated = true;

        this.toastr.showSuccess('logged in successfully', 'congratulations');
        this.router.navigate(['/UserlandingPage']);
        localStorage.setItem('userId',this.user.userDetails.userId);
        localStorage.setItem('email', this.user.userDetails.email);
        localStorage.setItem('firstName', this.user.userDetails.firstName);
        localStorage.setItem('lastName', this.user.userDetails.lastName);
        localStorage.setItem('userName', this.user.userDetails.userName);
        localStorage.setItem('managerId', this.user.userDetails.managerId);
        localStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('token', this.user.token);


      }


    }, error: () => {
      this.toastr.showError('enter valid credential','Failed')
    }
  });

  }
}
