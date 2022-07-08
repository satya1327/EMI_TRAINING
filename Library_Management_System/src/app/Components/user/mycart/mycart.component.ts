import { books } from './../../../models/books';
import { CartService } from './../../../shared/services/cartservices/cart.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  cartItemLog:any;
  issueDate=new Date();

  displayedColumns: string[] =  [ 'image','Bookname', 'category', 'Author','username','issueDate','returnDate'];
  dataSource!: MatTableDataSource<any>;
  constructor(private services:CartService) { }

  ngOnInit(): void {
    this.services.getCartItems().subscribe({ next:(response:any)=>{
      this.dataSource=new MatTableDataSource(response);
      this.cartItemLog=response;
      console.log(this.dataSource)

    }});

  }

}
