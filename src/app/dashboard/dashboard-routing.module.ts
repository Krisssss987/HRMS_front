import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeManagementComponent } from './dash-pages/employee-management/employee-management.component';
import { AttendenceComponent } from './dash-pages/attendence/attendence.component';
import { TimeSheetComponent } from './dash-pages/time-sheet/time-sheet.component';
import { DashboardComponent } from './dash-pages/dashboard/dashboard.component';
import { LeaveComponent } from './dash-pages/leave/leave.component';

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
    },
{path:'**',redirectTo:'dashboard',pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
