import { SubjectComponent } from './subject/subject.component';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { ReplayComponent } from './replay/replay.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'replay', component: ReplayComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
