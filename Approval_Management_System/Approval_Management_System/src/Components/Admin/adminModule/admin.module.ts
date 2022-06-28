import { AppRoutingModule } from './../../../app/app-routing.module';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModulesModule } from 'src/shared/mat-modules.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    MatModulesModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[AdminDashboardComponent]
})
export class AdminModule { }
