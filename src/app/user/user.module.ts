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
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UploadimageComponent } from './profile/uploadimage/uploadimage.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MyleaveComponent } from './myleave/myleave.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    DashboardComponent,
    LeaveComponent,
    UsersLayoutComponent,
    UsersFooterComponent,
    UsersContainerComponent,
    CertificatesComponent,
    ProfileComponent,
    UploadimageComponent,
    MyleaveComponent,
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
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatProgressBarModule
  ]
})
export class UserModule { }
