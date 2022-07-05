import { BookDataService } from '../../../shared/services/BookApiServices/book-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/models/books';

@Component({
  selector: 'app-details-books',
  templateUrl: './details-books.component.html',
  styleUrls: ['./details-books.component.css']
})
export class DetailsBooksComponent implements OnInit {
  bookDetails:any;
  constructor(private route:ActivatedRoute,private service:BookDataService,private router:Router) { }

  ngOnInit(): void {
   const id= this.getBook(this.route.snapshot.params['id']);
   console.log(id)
  }
  public getBook(id:number){
    this.service.getBookById(id).subscribe(response=>{
      console.log(response);
      this.bookDetails=response;

    })


  }

  }


