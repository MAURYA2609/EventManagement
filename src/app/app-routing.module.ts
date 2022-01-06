import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/Users/login/login.component';
import { SignupComponent } from './Components/Users/signup/signup.component';
import { ErrorDisplayComponent } from './Components/error-display/error-display.component';
import { InputLabelComponent } from './Components/input-label/input-label.component';
import { ButtonSubmitComponent } from './Components/button-submit/button-submit.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowTextComponent } from './Components/Users/show-text/show-text.component';
import { ForgotPasswordComponent } from './Components/Users/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login/verification-required',
    component: ShowTextComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'forgot-password/success',
    component: ShowTextComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [
  LoginComponent,SignupComponent,ErrorDisplayComponent ,InputLabelComponent,ButtonSubmitComponent,ShowTextComponent
  ,ForgotPasswordComponent
]