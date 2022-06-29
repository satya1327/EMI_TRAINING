import { employee } from './../../Models/employee';
import { EmployeeService } from './../../shared/services/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // employee:employee[];
  constructor(private http:EmployeeService) { }

  ngOnInit(): void {
    // this.http.getAllEmployee().subscribe(data=>{
    //   console.log("tiughiu"+data);
    //   this.employee=(data);

    // })
  }

}
