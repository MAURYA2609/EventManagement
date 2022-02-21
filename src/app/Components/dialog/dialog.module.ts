import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallForAbstractInputComponent } from './call-for-abstract-input/call-for-abstract-input.component';
import { RolesSetupComponent } from './roles-setup/roles-setup.component';
import { ViewTrackComponent } from './view-track/view-track.component';
import { TrackInputComponent } from './track-input/track-input.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { AuthorTypeSelectorComponent } from './author-type-selector/author-type-selector.component';
import { SearchAuthorComponent } from './search-author/search-author.component';
import { SearchUserComponent } from 'src/app/Components/dialog/search-user/search-user.component';



@NgModule({
  declarations: [
    CallForAbstractInputComponent,
    RolesSetupComponent,
    ViewTrackComponent,
    TrackInputComponent,
    AuthorTypeSelectorComponent,
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
