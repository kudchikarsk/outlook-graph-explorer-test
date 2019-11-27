import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OutlookLoginComponent } from './outlook-login/outlook-login.component';
import { OutlookDashboardComponent } from './outlook-dashboard/outlook-dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'outlook/login', component: OutlookLoginComponent },
  { path: 'outlook/dashboard', component: OutlookDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
