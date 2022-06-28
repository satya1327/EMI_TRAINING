import { UsermodulesModule } from './../Components/user/usermodules/usermodules.module';
import { LoginModule } from '../Components/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModulesModule } from 'src/shared/mat-modules.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from 'src/Components/Admin/adminModule/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MatModulesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UsermodulesModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
