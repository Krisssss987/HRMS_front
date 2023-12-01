import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { EmailGuard } from './auth/email.guard';
import { ResendVerificationComponent } from './login/login-components/resend-verification/resend-verification.component';
import { IntimeComponent } from './intime/intime.component';
import { OuttimeComponent } from './outtime/outtime.component';

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
    }, {
        path: 'resend-verification',
        component: ResendVerificationComponent
    },{
        path: 'intime',
        component: IntimeComponent
    },{
        path: 'outTime',
        component: OuttimeComponent
    },
{path:'',redirectTo:'login',pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
