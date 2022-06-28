import { AppRoutingModule } from './../../../app/app-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModulesModule } from 'src/shared/mat-modules.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatModulesModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  exports:[DashboardComponent]
})
export class UsermodulesModule { }
