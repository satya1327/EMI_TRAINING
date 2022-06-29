import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports:[]
})
export class SharedModuleModule { }
