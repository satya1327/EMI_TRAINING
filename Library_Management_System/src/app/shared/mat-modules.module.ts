import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

const matModulesarray=[MatSidenavModule,MatCardModule,MatPaginatorModule,MatTableModule,MatTooltipModule,MatToolbarModule,MatIconModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatButtonModule];
@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    matModulesarray

  ],
  exports:[matModulesarray]
})
export class MatModulesModule { }
