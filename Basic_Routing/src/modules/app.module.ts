import { ProfileComponent } from 'src/Components/profile/profile.component';

import { HomeComponent } from './../Components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from '../Components/app/app.component';
import {MatIconModule} from '@angular/material/icon';
import{ MatToolbarModule}from'@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from 'src/Components/aboutus/aboutus.component';
import { ContactusComponent } from 'src/Components/contactus/contactus.component';
import { PagenotfoundComponent } from 'src/Components/pagenotfound/pagenotfound.component';
import { ProductsComponent } from 'src/Components/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
