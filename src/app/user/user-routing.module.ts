import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [ {
        path: 'dashboard',
        component: DashboardComponent
    },{
        path: 'leave',
        component: LeaveComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
  },
    {
        path: 'certificates',
        component: CertificatesComponent
    },
{path:'',redirectTo:'dashboard',pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
