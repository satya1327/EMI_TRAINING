import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingCellRenderer } from 'ag-grid/dist/lib/rendering/rowComp';

import { RequestServicesService } from 'src/app/Core/RequestOperations/CrudOperations/request-services.service';

@Component({
  selector: 'app-user-view-history',
  templateUrl: './user-view-history.component.html',
  styleUrls: ['./user-view-history.component.css']
})
export class UserViewHistoryComponent implements OnInit {

  detailedRequest: any;
  name=localStorage.getItem('firstName');

  // dateFormatter:any="dd/m/yyyy";
  // firstName: any = localStorage.getItem('AdminfirstName');
  // lastName: any = localStorage.getItem('AdminlastName');
  // name: any = this.firstName + this.lastName;
  constructor(private requestDetails: RequestServicesService) {}
  // detailedRequest:any;
  // firstName:any=localStorage.getItem('firstName');
  // lastName:any=localStorage.getItem('lastName');
  // name:any=this.firstName+this.lastName;
  // constructor(private userdata:DataServicesService) { }
  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // dataSource!: MatTableDataSource<any>;

  // displayedColumns: string[] =  [ 'id','name','purpose', 'description', 'estimateCost','Requestdate','status','comments'];



  // ngOnInit(): void {

  //   this.userdata.getuserData().subscribe({next:(response:any)=>{
  //     this.dataSource=new MatTableDataSource(response.filter((item:any)=>item.name==this.name));
  //     this.detailedRequest=response;
  //     this.dataSource.paginator = this.paginator;
  //     console.log(this.dataSource)
  //   }});


  // }

  columnDefs:any = [
    {
      headerName: 'reqId',
      field: 'reqId',
      filter: 'agNumberColumnFilter',
      columnGroupShow: 'open',
      resizable: true,
      sortable: true,
      animateRows: true,
      rowDrag: true


      // lockpinned:true,


      // pinned: 'left'
    },
    { headerName: 'name', field: 'name', sortable: true, filterType: 'text',
    type: 'startsWith',
    filter:  this.name
    },
    { headerName: 'purpose', field: 'purpose' },
    { headerName: 'description', field: 'description' },
    {
      headerName: 'estimatedAmount',
      field: 'estimatedAmount',
      filter: 'agSetColumnFilter',
      filterParams: {
        applyMiniFilterWhileTyping: true,
      }
    },
    { headerName: 'statusName' ,field:'statusName', filter: true },
    {
      headerName: 'comments',
      field: 'comments',
      filter: 'agDateColumnFilter',
      editable: true,
      // pass in additional parameters to the text filter
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },


    }
//     { headerName: 'date', field: 'date' ,cellRenderer: 'dd/m/yyyy'

// },
  ];

  // public currencyFormatter(rowData: ValueFormatterParams) {
  //   return '£' + rowData.value;
  // }

  // public bracketsFormatter(rowData: ValueFormatterParams) {
  //   return '(' + rowData.value + ')';
  // }


  rowData: any;
  ngOnInit(): void {
    // this.userdata.getuserData().subscribe({next:(response:any)=>{
    //   this.dataSource=new MatTableDataSource(response.filter((item:any)=>item.name==this.name));
    //   this.detailedRequest=response;
    //   this.dataSource.paginator = this.paginator;
    //   console.log(this.dataSource)
    // }});
    this.rowData = this.requestDetails.GetAllRequestHistory();


  }
}

