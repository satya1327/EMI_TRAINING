import { DatashareService } from './../../shared/Services/datashare.service';
import { AfterViewInit, Component, OnInit, ViewChild ,Inject, Input} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-details-components',
  templateUrl: './details-components.component.html',
  styleUrls: ['./details-components.component.css']
})
export class DetailsEmployeeComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['id', 'from','to', 'dateCreated', 'permanentLink'];
   dataSource = new MatTableDataSource<Employee>(EmployeeData);
   permanentLink:boolean;

constructor(private matdialog:MatDialog,private service:DatashareService){}
   @ViewChild(MatPaginator) paginator: MatPaginator ;

   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.service.subject.subscribe(
      (data:any)=>{
        const records = Object.assign({}, ...data);
        EmployeeData.push(records);
        console.log(EmployeeData);


      }
    )
  }
  openDialog(){
    this.matdialog.open(AddEmployeeComponent,{
      width:'450px'
    });
  }


}


 export interface Employee {
  id:number,
  from: string;
  dateCreated: Date;
  permanentLink: string;
  to: string;
}

const EmployeeData: Employee[] =[{
    id: 19228,
    from: '/heath_and_wellness',
    to: '/danone-group-in-heath-and-wellness/report',
    dateCreated: new Date(),
    permanentLink: 'false',
  },
  {
    id: 19229,
    from: '/heinekens_acquisition_of_femsa_increases',
    to: '/heinekens_acquisition_of_femsa_increases',
    dateCreated: new Date(),
    permanentLink: 'true',
  },
  {
    id: 19230,
    from: '/herbal_traditional_products',
    to: '/herbal_traditional_products',
    dateCreated: new Date(),
    permanentLink: 'true',
  },
  {
    id: 19231,
    from: '/home_care',
    to: '/amway-corp-in-home-care/report',
    dateCreated: new Date(),
    permanentLink: 'true',
  },
  {
    id: 19232,
    from: '/hong-kong-china',
    to: '/100-home-delivery-take-away-in-hong-kong-china',
    dateCreated: new Date(),
    permanentLink: 'true',
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: new Date(),
    permanentLink: 'true',
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: new Date(),
    permanentLink: 'true',
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: new Date(),
    permanentLink: 'true',
  }
];


