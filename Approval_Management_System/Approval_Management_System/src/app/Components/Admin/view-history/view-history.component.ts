import { DataServicesService } from 'src/app/Core/data-services.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.css']
})
export class ViewHistoryComponent implements OnInit {
  detailedRequest:any;
  firstName:any=localStorage.getItem('AdminfirstName');
  lastName:any=localStorage.getItem('AdminlastName');
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

