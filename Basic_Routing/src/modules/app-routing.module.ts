
import { ProductsComponent } from './../Components/products/products.component';
import { ContactusComponent } from './../Components/contactus/contactus.component';
import { HomeComponent } from './../Components/home/home.component';

import { AppComponent } from './../Components/app/app.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from 'src/Components/aboutus/aboutus.component';
import { PagenotfoundComponent } from 'src/Components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from 'src/Components/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home', redirectTo: '/home', pathMatch: 'prefix' },
  {path:'profile',component:ProfileComponent},
  { path: 'product', component: ProductsComponent },
  { path: 'contactus', component: ContactusComponent },
  {path:'aboutus',component:AboutusComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
