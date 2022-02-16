import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorTypeSelectorComponent } from './author-type-selector/author-type-selector.component';
import { CallForAbstractInputComponent } from './call-for-abstract-input/call-for-abstract-input.component';
import { RolesSetupComponent } from './roles-setup/roles-setup.component';
import { ViewTrackComponent } from './view-track/view-track.component';
import { TrackInputComponent } from './track-input/track-input.component';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'



@NgModule({
  declarations: [
    AuthorTypeSelectorComponent,
    CallForAbstractInputComponent,
    RolesSetupComponent,
    ViewTrackComponent,
    TrackInputComponent,
    SearchAuthorComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule
  ]
})
export class DialogModule { }
