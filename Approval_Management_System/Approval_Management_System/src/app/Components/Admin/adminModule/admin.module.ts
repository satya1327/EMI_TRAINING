import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminRequestComponent } from '../../Admin/admin-request/admin-request.component';
import { AllRequestsComponent } from '../../Admin/all-requests/all-requests.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModuleModule } from '../../../shared/shared-module.module';
import { CreateRequestFormComponent } from '../../Admin/create-request-form/create-request-form.component';
import { LatestRequestComponent } from '../latest-request/latest-request.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModulesModule } from 'src/app/shared/mat-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RejectDialogComponent } from '../reject-dialog/reject-dialog.component';

@NgModule({
  declarations: [
 AdminDashboardComponent,
 AllRequestsComponent,
 LatestRequestComponent,
 CreateRequestFormComponent,
 RejectDialogComponent,
 DashboardComponent,
 AdminRequestComponent

  ],
  imports: [
    CommonModule,
    MatModulesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    SharedModuleModule,
    Ng2SearchPipeModule
  ],
  exports: [
    AdminDashboardComponent,
    LatestRequestComponent,
    CreateRequestFormComponent,
    RejectDialogComponent,
    DashboardComponent,
    AllRequestsComponent,
    AdminRequestComponent
  ],
})
export class AdminModule {}
