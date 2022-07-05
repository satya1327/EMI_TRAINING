import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from 'src/app/shared/services/BookApiServices/book-data.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  detailsonebook:any;
  bookByName:any;
  allBookList:any;
  constructor(private services:BookDataService,private toaster:NotificationService,private router:Router) { }

  displayedColumns: string[] = ['bookid', 'image', 'category', 'Author','quantity'];

  ngOnInit(): void {
    this.services.getAllBooks().subscribe(response=>{
      this.allBookList=(response);
    });
  }
  public deleteBook(id:any){
    this.services.deleteBook(id).subscribe (response=>{
     {
      this.toaster.showSuccess("congratulations","Successfully deleted");
      window.location.reload();
      }
    })
}
public details(id:any){
  this.services.getBookById(id).subscribe(response=>{
    console.log(response);
    this.detailsonebook=response;
  })
}
}
