import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'from','to', 'dateCreated', 'permanentLink'];
   dataSource = new MatTableDataSource<Employee>(EmployeeData);

   @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit() {
     this.dataSource.paginator = this.paginator;
  }
}


 export interface Employee {
  id:number,
  from: string;
  dateCreated: string;
  permanentLink: boolean;
  to: string;
}

const EmployeeData: Employee[] =[{
    id: 19228,
    from: '/heath_and_wellness',
    to: '/danone-group-in-heath-and-wellness/report',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19229,
    from: '/heinekens_acquisition_of_femsa_increases',
    to: '/heinekens_acquisition_of_femsa_increases',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19230,
    from: '/herbal_traditional_products',
    to: '/herbal_traditional_products',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19231,
    from: '/home_care',
    to: '/amway-corp-in-home-care/report',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19232,
    from: '/hong-kong-china',
    to: '/100-home-delivery-take-away-in-hong-kong-china',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  },
  {
    id: 19233,
    from: '/hot-drinks',
    to: '/associated-british-foods-plc-in-hot-drinks/report',
    dateCreated: new Date().getDate().toString(),
    permanentLink: true,
  }
];

