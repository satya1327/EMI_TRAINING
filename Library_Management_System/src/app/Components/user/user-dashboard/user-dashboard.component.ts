import { CartService } from './../../../shared/services/cartservices/cart.service';
import { UserCreationService } from './../../../shared/services/userCreation/user-creation.service';


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from 'src/app/shared/services/BookApiServices/book-data.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  count=0
  detailsList:any;
  bookByNameSearch:string;
  bookByName:any;
  allBookList:any;
  constructor(private services:BookDataService,private toaster:NotificationService,private router:Router,private cartServices:CartService) { }


  ngOnInit(): void {
    this.services.getAllBooks().subscribe(response=>{
      this.allBookList=(response);
    });


  }

  addToCart(id:any){
    
    this.services.getBookById(id).subscribe(response=>{
      this.cartServices.postCartItems(response).subscribe(response=>{
      });
      });
  }

}


