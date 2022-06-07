import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  term:any;
  searchdata:any;

  constructor() { }

  ngOnInit(): void {
  }

users= [
  {Name: 'Satyajit', age: 24, Technology: '.Net', location: 'pune'},
  {Name: 'Aniket', age: 23, Technology: 'java', location: 'hyderabad'},
  {Name: 'Kamala', age: 52, Technology: 'angular', location: 'bangalore'},
  {Name: 'Saroj', age: 60, Technology: 'react', location: 'chennai'},
  {Name: 'Subhashree', age: 27, Technology:'react', location: 'bangalore'},
  {Name: 'mayura', age: 30, Technology: 'java', location: 'pune'},
  {Name: 'Nagaraja', age: 32, Technology:'angular', location: 'bangalore'},
  {Name: 'Subham', age: 26, Technology: '.net', location: 'bangalore'},
  {Name: 'Ram', age: 24, Technology: 'java', location: 'hyderabad'},
  {Name: 'Anurag', age: 24, Technology: 'react', location: 'hyderabad'}
];
// getdata(){
//   this.term=this.searchdata;
// }

}
