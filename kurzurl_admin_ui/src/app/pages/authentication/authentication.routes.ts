import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginBgImageComponent } from './login-bg-image/login-bg-image.component';
import { LoginSimpleComponent } from './login-simple/login-simple.component';
import { LoginSweetalert2Component } from './login-sweetalert2/login-sweetalert2.component';
import { LoginTooltipComponent } from './login-tooltip/login-tooltip.component';
import { LoginTwoImageComponent } from './login-two-image/login-two-image.component';
import { LoginValidationComponent } from './login-validation/login-validation.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { RegisterBgImageComponent } from './register-bg-image/register-bg-image.component';
import { RegisterSimpleComponent } from './register-simple/register-simple.component';
import { RegisterWithTwoImageComponent } from './register-with-two-image/register-with-two-image.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';

export default [
  {
    path: 'simple',
    component: LoginSimpleComponent,
  },
  {
    path: 'image-one',
    component: LoginBgImageComponent
  },
  {
    path: 'image-two',
    component: LoginTwoImageComponent
  },
  {
    path: 'validation',
    component: LoginValidationComponent
  },
  {
    path: 'tooltip',
    component: LoginTooltipComponent
  },
  {
    path: 'login-sweetalert',
    component: LoginSweetalert2Component
  },
  {
    path: 'register-simple',
    component: RegisterSimpleComponent
  },
  {
    path: 'register-image-one',
    component: RegisterBgImageComponent
  },
  {
    path: 'register-image-two',
    component: RegisterWithTwoImageComponent
  },
  {
    path: 'unlock-user',
    component: UnlockUserComponent
  },
  {
    path: 'forget-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  }
] as Routes


