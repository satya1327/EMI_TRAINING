import { StoredComponent } from './../Components/stored/stored.component';
import { CreateEmployeeComponent } from './../Components/create-employee/create-employee.component';
import { EmployeeListComponent } from './../Components/employee-list/employee-list.component';
import { EmployeeComponent } from './../Components/employee/employee.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProficiencyFilterPipe } from 'src/shared/pipes/proficiency-filter.pipe';
import { RatingComponent } from '../Components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    StoredComponent,
    ProficiencyFilterPipe,
    RatingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
