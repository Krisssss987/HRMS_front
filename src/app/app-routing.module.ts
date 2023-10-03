import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { DashLayoutComponent } from './dashboard/dash-layout/dash-layout.component';
import { UsersLayoutComponent } from './user/users-layout/users-layout.component';




const routes: Routes = [
{
  path:'', redirectTo:'login', pathMatch:'full'
},
{
  path:'', component:LoginLayoutComponent, children: [{path:'login', loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)}]
},
{
  path:'sa', component:DashLayoutComponent, children: [{path:'', loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)}]
},
{
  path:'', component:UsersLayoutComponent, children: [{path:'dashboard', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}]
},
{ path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
