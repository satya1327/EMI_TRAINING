import { NavbarComponent } from './navbar/navbar.component';
import { ChilderenComponent } from './childeren/childeren.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'parent',component:NavbarComponent},{path:'child',component:ChilderenComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
