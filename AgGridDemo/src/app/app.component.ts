import { UserdataService } from './userdata.service';
import { ColDef } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  columnDefs:any=[
    { headerName: 'id', field: 'id',sortable:true,filter:true},
    { headerName: 'firstName', field: 'firstName'},
    { headerName: 'lastName', field: 'lastName'},
    { headerName: 'age', field: 'age'},
    { headerName: 'contact', field: 'contact'}
  ];
 constructor(private data:UserdataService){}
 rowData:any;
  ngOnInit() {
  this.data.userData().subscribe(res=>
      {
        this.rowData=(res);
      }
      )
    console.log(this.rowData);
  }

    // title = 'app';

    // columnDefs: any = [
    //   { headerName: 'Make', field: 'make' },
    //   { headerName: 'Model', field: 'model' },
    //   { headerName: 'Price', field: 'price' }
    // ];

    // rowData = [
    //   { make: 'Toyota', model: 'Celica', price: 35000 },
    //   { make: 'Ford', model: 'Mondeo', price: 32000 },
    //   { make: 'Porsche', model: 'Boxster', price: 72000 }
    // ];
  }

