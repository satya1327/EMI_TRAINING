import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataServicesService } from 'src/app/Core/data-services.service';

@Component({
  selector: 'app-user-view-history',
  templateUrl: './user-view-history.component.html',
  styleUrls: ['./user-view-history.component.css']
})
export class UserViewHistoryComponent implements OnInit {

  detailedRequest:any;
  firstName:any=localStorage.getItem('firstName');
  lastName:any=localStorage.getItem('lastName');
  name:any=this.firstName+this.lastName;
  constructor(private userdata:DataServicesService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] =  [ 'id','name','purpose', 'description', 'estimateCost','status','comments'];



  ngOnInit(): void {

    this.userdata.getuserData().subscribe({next:(response:any)=>{
      this.dataSource=new MatTableDataSource(response.filter((item:any)=>item.name==this.name));
      this.detailedRequest=response;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)
    }});


  }

}
