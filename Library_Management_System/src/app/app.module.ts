import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { MatModulesModule } from './shared/mat-modules.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from '../app/Components/admin/add-book/add-book.component';
import { EditBookComponent } from '../app/Components/admin/edit-book/edit-book.component';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from '../app/Components/admin/Admin-Dashboard/dash-board.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MycartComponent } from './Components/user/mycart/mycart.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    MainPageComponent,
    DashBoardComponent,
    UserDashboardComponent,
    MycartComponent,

  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModulesModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
