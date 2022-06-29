import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './Components/home/home.component';

const modules = [MatSidenavModule,MatBadgeModule,MatMenuModule,MatSelectModule,MatIconModule, MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule,MatNativeDateModule];
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, modules],
  exports: [modules],
})
export class MatModulesModule {}
