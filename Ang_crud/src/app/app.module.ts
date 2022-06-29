


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { DetailsEmployeeComponent } from 'src/Components/details-components/details-components.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddEmployeeComponent } from 'src/Components/add-employee/add-employee.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { PermanentlinkComponent } from 'src/Components/permanentlink/permanentlink.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsEmployeeComponent,
    AddEmployeeComponent,

    PermanentlinkComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule

  ],
entryComponents:[AddEmployeeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
