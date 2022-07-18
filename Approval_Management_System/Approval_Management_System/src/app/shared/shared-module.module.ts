import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MyRequestComponent } from '../shared/components/my-request/my-request.component';
import { CreateRequestComponent } from '../shared/components/create-request/create-request.component';

import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginModule } from './components/login/login.module';
import { MatModulesModule } from './mat-modules.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [HomeComponent  , SignupComponent  , PageNotFoundComponent  ,CreateRequestComponent,MyRequestComponent],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    MatModulesModule,
    MatModulesModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  exports: [HomeComponent, SignupComponent, PageNotFoundComponent,CreateRequestComponent,MyRequestComponent],
})
export class SharedModuleModule {}
