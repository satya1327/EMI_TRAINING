import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url=environment.userbaseurl
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user:any;
isAuthenticated=false;
isAdmin=false;
isUser=false;
response:any;
data:any;
  constructor(private http:HttpClient,private toastr:NotificationService,private router:Router) { }
  public authenticateUser(data:any){
return this.http.get(url).subscribe(response=>{
  console.log(response);
  this.user=response;
  this.data=data;
  this.authenticateUsers();
  this.navigateUser();
})
  }
  authenticateUsers(){
    this.response=(this.user.find((x:any)=>{
      return x.username==this.data.username  && x.password==this.data.password
    }));
  }
  navigateUser(){
    if(this.response){
      this.checkRole();
    }
    else{
      this.toastr.showError("Invalid credential","Failed");
    }
  }
  checkRole(){
    this.isAuthenticated=true;
    if(this.response.role==='admin'){
      this.isAdmin=true;
      this.isAuthenticated=true;
      this.toastr.showSuccess("logged in successfully","congratulations");
      this.router.navigate(['/adminDashboard']);
    }
    else if(this.response.role==='user'){
      this.isUser=true;
      this.isAuthenticated=true;
      this.toastr.showSuccess("logged in successfully","congratulations");
      this.router.navigate(['/userDashboard']);
    }
    else{
      this.toastr.showError("invalid credential","failed");
    }
  }

}
