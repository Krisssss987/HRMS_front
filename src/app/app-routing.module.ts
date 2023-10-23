import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { DashLayoutComponent } from './dashboard/dash-layout/dash-layout.component';
import { UsersLayoutComponent } from './user/users-layout/users-layout.component';
import { AuthGuard } from './login/auth/auth.guard';
import { RoleGuard } from './login/auth/role.guard';
import { LoginGuard } from './login/auth/login.guard';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {
      path: '',
      component: UsersLayoutComponent,
      canActivate:[AuthGuard,RoleGuard],
      data: { roles: ['Intern', 'Employee'] },
      children: [{
        path: 'dashboard',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }]
    }, {
    path: '',
    component: LoginLayoutComponent,
    canActivate:[LoginGuard],
    children: [{
      path: 'login',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }]
  },
  {
    path: 'sa',
    component: DashLayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Manager'] },
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
