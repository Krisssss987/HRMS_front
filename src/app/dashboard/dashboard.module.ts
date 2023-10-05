import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashLayoutComponent } from './dash-layout/dash-layout.component';
import { DashLoadingComponent } from './dash-loading/dash-loading.component';
import { DashPagesComponent } from './dash-pages/dash-pages.component';
import { FooterComponent } from './dash-component/footer/footer.component';
import { EmployeeManagementComponent } from './dash-pages/employee-management/employee-management.component';
import { AttendenceComponent } from './dash-pages/attendence/attendence.component';
import { TimeSheetComponent } from './dash-pages/time-sheet/time-sheet.component';
import { DashboardComponent } from './dash-pages/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { ContainerComponent } from './dash-layout/container/container.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddEmployeeComponent } from './dash-pages/employee-management/add-employee/add-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LeaveComponent } from './dash-pages/leave/leave.component';

@NgModule({
  declarations: [
    DashLayoutComponent,
    DashLoadingComponent,
    DashPagesComponent,
    FooterComponent,
    EmployeeManagementComponent,
    AttendenceComponent,
    TimeSheetComponent,
    DashboardComponent,
    ContainerComponent,
    AddEmployeeComponent,
    LeaveComponent,
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
