import { AuthGuard } from './shared/services/auth.guard';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';

import { DetailsBooksComponent } from './Components/user/details-books/details-books.component';

import { DashBoardComponent } from '../app/Components/admin/Admin-Dashboard/dash-board.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/mainPage', pathMatch: 'full' },
  { path: 'mainPage', component: MainPageComponent },
  {path:'adminDashboard',component:DashBoardComponent,canActivate:[AuthGuard]},
  {path:'userDashboard',component:UserDashboardComponent},
  {path:'details/:bookid',component:DetailsBooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
