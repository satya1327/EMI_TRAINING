import { BookDataService } from '../../../shared/services/BookApiServices/book-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/models/books';
import { DetailsidService } from 'src/app/shared/services/datasharebridge/detailsid.service';

@Component({
  selector: 'app-details-books',
  templateUrl: './details-books.component.html',
  styleUrls: ['./details-books.component.css']
})
export class DetailsBooksComponent implements OnInit {
  bookdetails:any;
  constructor(private details:DetailsidService) {
    this.details.subject.subscribe(response=>{
      this.bookdetails=response;

    })
   }

  ngOnInit(): void {

  }


  }


