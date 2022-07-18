import { AuthguardGuard } from './Core/authguard.guard';
import { AdminRequestComponent } from '../app/Components/Admin/admin-request/admin-request.component';
import { AllRequestsComponent } from '../app/Components/Admin/all-requests/all-requests.component';
import { DashboardComponent } from '../app/Components/Admin/dashboard/dashboard.component';
import { LatestRequestComponent } from '../app/Components/Admin/latest-request/latest-request.component';
import { PageNotFoundComponent } from '../app/shared/components/page-not-found/page-not-found.component';
import { MyRequestComponent } from '../app/shared/components/my-request/my-request.component';
import { SignupComponent } from '../app/shared/components/signup/signup.component';
import { HomeComponent } from '../app/shared/components/home/home.component';
import { AdminDashboardComponent } from '../app/Components/Admin/admin-dashboard/admin-dashboard.component';
import { landingPageComponent } from '../app/Components/User/landingPage/landingPage.component';
import { LoginComponent } from '../app/shared/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'UserlandingPage',
    component: landingPageComponent,

    children: [{ path: 'myRequest', component: MyRequestComponent }],
    canActivate:[AuthguardGuard]

  },
  {
    path: 'AdminDashboard',
    component: AdminDashboardComponent,
    canActivate:[AuthguardGuard],
    children: [
      { path: 'myRequest', component: MyRequestComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'latestRequest', component: LatestRequestComponent },
      { path: 'allRequest', component: AllRequestsComponent },
      {path:'myRequestComp',component:AdminRequestComponent}
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
