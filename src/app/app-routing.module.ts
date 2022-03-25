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
import { AbstractListComponent } from './Components/Users/abstract-list/abstract-list.component';
import { AbstractDetailComponent } from './Components/abstract-detail/abstract-detail.component';
import { SettingsComponent } from './Components/Users/manage/settings/settings.component';
import { ProtectionComponent } from './Components/Users/manage/protection/protection.component';
import { MaterialsComponent } from './Components/Users/manage/materials/materials.component';
import { RolesSetupComponent } from './Components/Users/manage/roles-setup/roles-setup.component';
import { CallForAbstractComponent } from './Components/Users/manage/call-for-abstract/call-for-abstract.component';
import { LogComponent } from './Components/Users/manage/log/log.component';
import { TracksComponent } from './Components/Users/manage/tracks/tracks.component';
import { TrackPermissionComponent } from './Components/Users/manage/track-permission/track-permission.component';
import { SubmitNewAbstractComponent } from './Components/Users/submit-new-abstract/submit-new-abstract.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { ProgressComponent } from './Components/progress/progress.component';
import { RegistrationComponent } from './Components/Users/manage/registration/registration.component';
import { BasicFormComponent } from './Components/Users/manage/basic-form/basic-form.component';
import { EditFormComponent } from './Components/Users/manage/edit-form/edit-form.component';
import { ConfigureFormComponent } from './Components/Users/manage/configure-form/configure-form.component';
import { CreateFormComponent } from './Components/Users/manage/create-form/create-form.component';
import { EventRegistrationComponent } from './Components/Users/event-registration/event-registration.component';

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
    path: 'signup/success',
    component: ShowTextComponent
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
    canActivate: [AdminAuthGuard]
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
    path: 'reset/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'verify/:token',
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
    path: 'event/:id/submit-abstract',
    component: SubmitNewAbstractComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'event/:id/register',
    component: EventRegistrationComponent
  },
  {
    path: 'event/:id/abstracts',
    component: AbstractListComponent
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
  },
  {
    path: 'event/:id/manage',
    component: ManageEventComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'permission',
        component: ProtectionComponent,
      },
      {
        path: 'material',
        component: MaterialsComponent,
      },
      {
        path: 'roles-setup',
        component: RolesSetupComponent,
      },
      {
        path: 'abstracts',
        component: CallForAbstractComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'registration/:fid/basicform',
        component: BasicFormComponent
      },
      {
        path: 'registration/:fid/configureform',
        component: ConfigureFormComponent
      },
      {
        path: 'registration/createform',
        component: CreateFormComponent
      },
      {
        path: 'registration/:fid',
        component: EditFormComponent
      },
      {
        path: 'logs',
        component: LogComponent,
      },
      {
        path: 'tracks',
        component: TracksComponent
      },
      {
        path: 'tracks/permission',
        component: TrackPermissionComponent
      }
    ]
  },
  
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
  EventDetailComponent, ManageEventComponent, EventListComponent ,InputTextRequiredComponent ,EventComponent ,
  AbstractListComponent ,AbstractDetailComponent , SubmitNewAbstractComponent , ProgressComponent 
]