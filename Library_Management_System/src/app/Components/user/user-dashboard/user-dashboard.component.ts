import { DetailsBooksComponent } from './../details-books/details-books.component';
import { DetailsidService } from './../../../shared/services/datasharebridge/detailsid.service';
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
  detailsList:any;
  bookByNameSearch:string;
  bookByName:any;
  allBookList:any;
  constructor(private detailsid:DetailsidService,private services:BookDataService,private toaster:NotificationService,private router:Router,private matdialog:MatDialog) { }

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

  this.services.getBookById(id).subscribe((response:any)=>{

  this.detailsid.detailsId(response)
  this.matdialog.open(DetailsBooksComponent,{
    width:'400px'
  });
  });





}
}
