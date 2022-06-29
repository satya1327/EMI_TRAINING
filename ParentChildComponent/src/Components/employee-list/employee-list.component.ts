import { employee } from './../../Models/employee';
import { EmployeeService } from './../../shared/services/employee.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
@Input() employee:any=[];
employeedata:string;
emploeeServices:any=[];
  constructor(private employeee:EmployeeService) {


  }
  ngOnInit(): void {
    this.employeee.getAllEmployee().subscribe(data=>{
      this.emploeeServices=data;


    })
  console.log(this.emploeeServices)

  }


}
