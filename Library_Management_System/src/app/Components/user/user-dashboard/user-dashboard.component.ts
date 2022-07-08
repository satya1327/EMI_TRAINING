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
  //logic for Date

  currentDate = new Date();
  day = this.currentDate.getDate();
  month = this.currentDate.getMonth() + 1;
  year = this.currentDate.getFullYear();
  returnDate = this.day + 3 + '/' + this.month + '/' + this.year;
  issueDate = this.day + '/' + this.month + '/' + this.year;

  //logic ends
  userId = localStorage.getItem('userId');
  userEmail = localStorage.getItem('email');
  userName = localStorage.getItem('userName');

  bookByNameSearch: string;
  allBookList: any;

  constructor(
    private bookServices: BookDataService,
    private toaster: NotificationService,
    private router: Router,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    this.bookServices.getAllBooks().subscribe((response) => {
      this.allBookList = response;
    });

    console.log(this.userEmail);
    console.log(this.userName);
    console.log(this.userId);
  }

  addToCart(id: any) {
    this.cartServices.getCartItems().subscribe((response) => {
      if (this.incomingRequest(this.userEmail, response) < 3) {
        this.bookServices.getBookById(id).subscribe((response) => {
          console.log(response.id);
          this.cartServices
            .postCartItems(
              this.postedBook(
                response.id,
                response.bookname,
                response.Author,
                response.category,
                response.imageUrl,
                this.userEmail,
                this.userName,
                this.issueDate,
                this.returnDate
              )
            )
            .subscribe((res) => {
              this.toaster.showSuccess(
                'Book request added successfully',
                `${'Return Date is ' + this.returnDate}`
              );
            });
        });
      } else {
        this.toaster.showWarning(
          'You exceed the limit of book request',
          'falied'
        );
      }
    });
  }

  incomingRequest(userEmail: any, allBookList: any) {
    let count = 0;
    for (let i = 0; i < allBookList.length; i++) {
      if (allBookList[i].email == userEmail) {
        count++;
      }
    }
    return count;
  }

  postedBook(
    id: number,
    bookname: string,
    Author: string,
    category: string,
    imageUrl: string,
    email: string,
    username: string,
    issueDate: string,
    returnDate: string
  ) {
    return {
      id: id,
      bookname: bookname,
      Author: Author,
      category: category,
      quantity: 1,
      imageUrl: imageUrl,
      email: email,
      username: username,
      issueDate: issueDate,
      returnDate: returnDate,
    };
  }
}
