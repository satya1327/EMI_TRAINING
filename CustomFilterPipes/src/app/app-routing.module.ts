import { PagenotfoundComponent } from './../Components/pagenotfound/pagenotfound.component';
import { MainComponent } from './../Components/main/main.component';
import { HomeComponent } from './../Components/home/home.component';
import { UsersComponent } from './../Components/users/users.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'src/Components/products/products.component';
import { ThankyouComponent } from 'src/Components/thankyou/thankyou.component';

const routes: Routes = [

  { path: 'users', component: UsersComponent },
  { path: 'Product', component: ProductsComponent },
  {path:'Home',component:HomeComponent},
  {path:'thank',component:ThankyouComponent},
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
