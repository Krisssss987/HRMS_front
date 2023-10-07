import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { EmailGuard } from './auth/email.guard';

const routes: Routes = [
  {
    path: '',
    children: [ {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'forgot',
        component: ForgotComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'password',
        canActivate:[EmailGuard],
        component: ResetComponent
    },
{path:'',redirectTo:'login',pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
