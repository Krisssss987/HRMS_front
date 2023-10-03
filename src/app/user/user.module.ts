import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { UsersLayoutComponent } from './users-layout/users-layout.component';
import { UsersFooterComponent } from './users-layout/users-footer/users-footer.component';
import { UsersContainerComponent } from './users-layout/users-container/users-container.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CertificatesComponent } from './certificates/certificates.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    DashboardComponent,
    LeaveComponent,
    UsersLayoutComponent,
    UsersFooterComponent,
    UsersContainerComponent,
    CertificatesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule, ReactiveFormsModule,
    NgIf, JsonPipe,
    MatNativeDateModule,
  ]
})
export class UserModule { }
