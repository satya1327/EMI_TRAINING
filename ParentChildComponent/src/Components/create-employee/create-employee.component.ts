import { employee } from './../../Models/employee';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeId:number;
  employeeName:string;
  projectId:number;
  angularProficiency:number;
employee:employee;
@Output() Employeerecord:EventEmitter<employee>=new EventEmitter<employee>();
  constructor() {
    this.employee=new employee();
  }

  ngOnInit(): void {
  }

  public addEmployee(){
    const data={
      employeeId:this.employee.employeeId,
      employeeName:this.employee.employeeName,
      projectId:this.employee.projectId,
      angularProficiency:this.employee.angularProficiency


    }
    console.log(data);

    this.Employeerecord.emit(data);


  }

}
