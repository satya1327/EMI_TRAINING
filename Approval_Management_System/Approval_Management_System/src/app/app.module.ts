import { UsermodulesModule } from '../app/Components/User/usermodules.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModuleModule } from '../app/shared/shared-module.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdminModule } from '../app/Components/Admin/adminModule/admin.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UsermodulesModule,
    AdminModule,
    SharedModuleModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
