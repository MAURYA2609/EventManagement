import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service'
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  message=""
  url = ""

  form : any = {
  title : "",
  introduction : "",
  contact_info : "",
  registration_limit : ""
  }

  constructor(private router: Router, private cookie: CookieService,  private location: Location,
    private eventService: EventService,private notificationService: NotificationService) { 
      
    }

  ngOnInit(): void {
  }

  saveFormData(){
    console.log(this.router.url.split('/')[2])
    this.eventService.createForm({ objToSend: this.form }, this.router.url.split('/')[2]).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.notificationService.showInfo(this.message, "New form added")
        } 
      },
      error => {
        this.notificationService.showError(error.error.error, "New Form not added")
      }
    )

  }
}
