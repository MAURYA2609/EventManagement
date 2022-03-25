import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageModule } from './Components/Users/manage/manage.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DialogModule } from './Components/dialog/dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EventRegistrationComponent } from './Components/Users/event-registration/event-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    routingModule,
    EventRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    CKEditorModule,
    FontAwesomeModule,
    RecaptchaFormsModule,
    HttpClientModule,
    MatDialogModule,
    ManageModule,
    DialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSlideToggleModule
  ],
  providers: [CookieService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
