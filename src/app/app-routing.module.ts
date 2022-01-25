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
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainPageComponent } from './Components/Users/main-page/main-page.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { CategoryComponent } from './Components/category/category.component';
import { ResetPasswordComponent } from './Components/Users/reset-password/reset-password.component';
import { VerifyEmailComponent } from './Components/Users/verify-email/verify-email.component';
import { UserDetailComponent } from './Components/Users/user-detail/user-detail.component';
import { UserEditComponent } from './Components/Users/user-edit/user-edit.component';
import { ShowErrorComponent } from './Components/Users/show-error/show-error.component';
import { PersonalComponent } from './Components/Users/edit/personal/personal.component';
import { AffiliationComponent } from './Components/Users/edit/affiliation/affiliation.component';
import { CredentialsComponent } from './Components/Users/edit/credentials/credentials.component';
import { CreateNewEventComponent } from './Components/Users/create-new-event/create-new-event.component';
import { EventDetailComponent } from './Components/Users/event-detail/event-detail.component';
import { ManageEventComponent } from './Components/Users/manage-event/manage-event.component';
import { EventListComponent } from './Components/Users/event-list/event-list.component';
import { InputTextRequiredComponent } from './Components/input-text-required/input-text-required.component';
import { EventComponent } from './Components/event/event.component';
import { AdminAuthGuard } from './services/admin-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
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
  },
  {
    path: 'category/:id/create-event',
    component: CreateNewEventComponent,
    /**canActivate: [AdminAuthGuard]**/
  },
  {
    path: 'category/:id',
    component: EventListComponent
  },
  {
    path: 'event/:id',
    component: EventDetailComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'show-text',
    component: ShowErrorComponent,
  },
  {
    path: ':username',
    component: UserDetailComponent
  },
  {
    path:':username/edit',
    component: UserEditComponent,
    children: [
      {
        path: 'personal',
        component: PersonalComponent
      },
      {
        path: 'affiliation',
        component: AffiliationComponent
      },
      {
        path: 'credential',
        component: CredentialsComponent
      }
    ]
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
  ,ForgotPasswordComponent , HeaderComponent , FooterComponent , MainPageComponent ,SearchbarComponent,
  CategoryComponent, ResetPasswordComponent, VerifyEmailComponent, UserDetailComponent, UserEditComponent ,
  PersonalComponent, AffiliationComponent , CredentialsComponent, ShowErrorComponent , CreateNewEventComponent,
  EventDetailComponent, ManageEventComponent, EventListComponent ,InputTextRequiredComponent ,EventComponent
]