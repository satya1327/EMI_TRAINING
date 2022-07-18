
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RequestComponent } from './request/request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { landingPageComponent } from './landingPage/landingPage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModulesModule } from 'src/app/shared/mat-modules.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [

    EditRequestComponent,
    RequestComponent,
    landingPageComponent,




  ],
  imports: [
    CommonModule,
    MatModulesModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SharedModuleModule,
    Ng2SearchPipeModule
  ],
  exports: [

landingPageComponent



  ],
})
export class UsermodulesModule {}
