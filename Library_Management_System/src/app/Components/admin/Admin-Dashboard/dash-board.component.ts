import { EditIdService } from './../../../shared/services/datasharebridge/edit-id.service';
import { EditBookComponent } from './../edit-book/edit-book.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { BookDataService } from 'src/app/shared/services/BookApiServices/book-data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  bookByName:any;
  allBookList:any;
  constructor(private datashare:EditIdService,private services:BookDataService,private toaster:NotificationService,private router:Router,private matdialog:MatDialog) { }

  displayedColumns: string[] = [ 'image', 'category', 'Author','quantity','Action'];


  ngOnInit(): void {
    this.services.getAllBooks().subscribe(response=>{
      console.log(response);
      this.allBookList=(response);
    });
  }
  openAddDialog(){
    this.matdialog.open(AddBookComponent,{
      width:'400px'
    });
  }
  openEditDialog(){
    this.matdialog.open(EditBookComponent,{
      width:'400px'
    });
  }

  public deleteBook(id:any){
    this.services.deleteBook(id).subscribe (response=>{
     {
      this.toaster.showSuccess("congratulations","Successfully deleted");
      window.location.reload();
      }
    });

}
editBook(id:number){
  this.matdialog.open(EditBookComponent,{
    width:'400px'
  });
  this.datashare.editId(id);

}

}
