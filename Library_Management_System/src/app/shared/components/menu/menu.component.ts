import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialogLogin(){
    this.matDialog.open(LoginComponent,{
      width:'400px'
    });
  }
}
