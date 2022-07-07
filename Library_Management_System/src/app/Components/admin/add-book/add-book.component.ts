import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookDataService } from 'src/app/shared/services/BookApiServices/book-data.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookAddition:FormGroup;
  constructor(private router:Router,private addBook:BookDataService,private formBuilder:FormBuilder,private toaster:NotificationService,private matdialog:MatDialog) { }

  ngOnInit(): void {
    this.bookAddition=this.formBuilder.group({
      bookname:['',[Validators.required]],
      category:['',[Validators.required]],
      imageUrl:['',Validators.required],
      Author:['',[Validators.required]],
      quantity:['',[Validators.required]]
    });
  }
  addBooks(){
    this.addBook.addBooks(this.bookAddition.value).subscribe(response=>{
      this.toaster.showSuccess("Congratulations","Book Added Successfully");
      this.matdialog.closeAll();
     this.router.navigate(['/adminDashboard']);
    });

  }

}
