import { carts } from './../../../models/carts';
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
  displayedColumns: string[] =  [ 'image','Bookname', 'category', 'Author'];
  dataSource!: MatTableDataSource<any>;
  constructor(private services:CartService) { }

  ngOnInit(): void {
    this.services.getCartItems().subscribe({ next:(res:any)=>{
      this.dataSource=new MatTableDataSource(res);
      console.log(res)
    }});

  }

}
