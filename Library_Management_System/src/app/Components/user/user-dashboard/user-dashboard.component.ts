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
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userName: any;
  id: any;

  //logic for Date

  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  returnDate = this.day + 3 + '/' + this.month + '/' + this.year;

  //logic ends


  bookByNameSearch: string;
  allBookList: any;
  count = 0;



  constructor(
    private services: BookDataService,
    private toaster: NotificationService,
    private router: Router,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    this.services.getAllBooks().subscribe((response) => {
      this.allBookList = response;
    });

    this.userName = localStorage.getItem('userName');
    this.id = localStorage.getItem('userId');
  }

  addToCart(id: any) {
    if (this.count < 3) {
      this.services.getBookById(id).subscribe((response) => {
        this.cartServices.postCartItems(response).subscribe((response) => {});
        this.count++;
      });

      this.toaster.showSuccess(
        'Added to cart',
        `${'Return Date is ' + this.returnDate}`
      );
    } else {
      this.toaster.showWarning('Maximum Limit exceeded', 'falied');
    }
  }
}
