import { PagenotfoundComponent } from './../Components/pagenotfound/pagenotfound.component';
import { MainComponent } from './../Components/main/main.component';
import { ThankyouComponent } from './../Components/thankyou/thankyou.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { ProductsComponent } from 'src/Components/products/products.component';
import { UsersComponent } from 'src/Components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent,
    ThankyouComponent,
    MainComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
