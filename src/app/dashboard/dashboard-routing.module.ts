import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeManagementComponent } from './dash-pages/employee-management/employee-management.component';
import { AttendenceComponent } from './dash-pages/attendence/attendence.component';
import { TimeSheetComponent } from './dash-pages/time-sheet/time-sheet.component';
import { DashboardComponent } from './dash-pages/dashboard/dashboard.component';
import { LeaveComponent } from './dash-pages/leave/leave.component';
import { ViewComponent } from './dash-pages/leave/view/view.component';
import { LeaveIdGuard } from '../login/auth/leave.guard';

const routes: Routes = [
  {
    path: '',
    children: [ {
        path: 'management',
        component: EmployeeManagementComponent
    },{
      path: 'attendance',
      component: AttendenceComponent
    },{
      path: 'timesheet',
      component: TimeSheetComponent
    },{
      path: 'dashboard',
      component: DashboardComponent
    },{
      path: 'leave',
      component: LeaveComponent
    },{
      path: 'viewLeave',
      canActivate: [LeaveIdGuard],
      component: ViewComponent
    },
{path:'**',redirectTo:'dashboard',pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
