import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractReviewComponent } from './abstract-review/abstract-review.component';
import { CallForAbstractComponent } from './call-for-abstract/call-for-abstract.component';
import { LogComponent } from './log/log.component';
import { MaterialsComponent } from './materials/materials.component';
import { ProtectionComponent } from './protection/protection.component';
import { RolesSetupComponent } from './roles-setup/roles-setup.component';
import { SettingsComponent } from './settings/settings.component';
import { TrackPermissionComponent } from './track-permission/track-permission.component';
import { TracksComponent } from './tracks/tracks.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AbstractReviewComponent,
    CallForAbstractComponent,
    LogComponent,
    MaterialsComponent,
    ProtectionComponent,
    RolesSetupComponent,
    SettingsComponent,
    TrackPermissionComponent,
    TracksComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ManageModule { }
