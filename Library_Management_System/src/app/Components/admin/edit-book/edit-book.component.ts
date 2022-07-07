import { EditIdService } from './../../../shared/services/datasharebridge/edit-id.service';
import { NotificationService } from '../../../shared/services/notification/notification.service';
import { Router } from '@angular/router';
import { BookDataService } from '../../../shared/services/BookApiServices/book-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { books } from 'src/app/models/books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookedit:FormGroup;
  editBookDetails: books={category:'',bookname:'',Author:'',imageUrl:'',quantity:0};
  editid:any;
  books=new books();

  constructor(private datashared:EditIdService,private services:BookDataService,private router:Router,private toastr:NotificationService,private fb:FormBuilder,private matdialog:MatDialog) {
      this.datashared.subject.subscribe(response=>{
        this.editid=response;
      });
      this.bookedit=this.fb.group({
        bookname:['',[Validators.required]],
        category:[''],
        Author:['',[Validators.required]],
        quantity:['',[Validators.required]],
        imageUrl:['',[Validators.required]]
      });


  }

  ngOnInit(): void {

    this.services.getBookById(this.editid).subscribe((response:any)=>{


      this.bookedit=this.fb.group({
        bookname:[response['bookname']],
        category:[response['category']],
        Author:[response['Author']],
        quantity:[response['quantity']],
        imageUrl:[response['imageUrl']]
      });
    });

  }
  editBook(){
    this.services.editBook(this.editid,this.bookedit.value).subscribe(response=>{
      console.log(response);
    this.toastr.showSuccess("Congratulations","Book record successfully updated");
    location.reload();
    this.matdialog.closeAll();
   this.router.navigate(['/adminDashboard']);
  });
  }

}
