import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials/materials.component';
import { RolesSetupComponent } from './roles-setup/roles-setup.component';
import { CallForAbstractComponent } from './call-for-abstract/call-for-abstract.component';
import { TracksComponent } from './tracks/tracks.component';
import { AbstractReviewComponent } from './abstract-review/abstract-review.component';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';
import { ProtectionComponent } from './protection/protection.component';
import { SettingsComponent } from './settings/settings.component';
import { TrackPermissionComponent } from './track-permission/track-permission.component';
import { RegistrationComponent } from './registration/registration.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfigureFormComponent } from './configure-form/configure-form.component';
import { CreateFormComponent } from './create-form/create-form.component'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 



@NgModule({
  declarations: [
    MaterialsComponent,
    RolesSetupComponent,
    CallForAbstractComponent,
    TracksComponent,
    AbstractReviewComponent,
    LogComponent,
    ProtectionComponent,
    SettingsComponent,
    TrackPermissionComponent,
    RegistrationComponent,
    BasicFormComponent,
    EditFormComponent,
    ConfigureFormComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule
  ]
})
export class ManageModule { }
