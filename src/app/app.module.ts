import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManageModule } from './Components/Users/manage/manage.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DialogModule } from './Components/dialog/dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    routingModule
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
    ToastrModule.forRoot()
  ],
  providers: [CookieService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
