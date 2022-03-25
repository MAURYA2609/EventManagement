import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service'
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  
  url = ""
  message=""

  form : any = {
  title : "",
  introduction : "",
  contact_info : "",
  registration_limit : ""
  }

  constructor(private router: Router, private cookie: CookieService,  private location: Location,
    private eventService: EventService,private notificationService: NotificationService) { 
      console.log(this.router.url.split('/')[2],this.router.url.split('/')[5])
      this.eventService.getForm(this.router.url.split('/')[2],this.router.url.split('/')[5]).subscribe(
        data => {
          this.setData(data)
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
    this.url = this.router.url
    }

  ngOnInit(): void {
  }

  setData(data:any){
    this.form.title = data.title
  }
  saveFormData(){
    console.log(this.form)
    this.eventService.updateForm({ objToSend: this.form }, this.url.split('/')[2],this.url.split('/')[5]).subscribe(
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
