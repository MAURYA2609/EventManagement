import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service'
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

  message=""
  forms : any = [
    {title : "firstname",type:"text",input:""},    
    {title : "lastname",type:"text",input:""},
    {title : "email",type:"email",input:""},
    {title : "affiliation",type:"text",input:""},
  ]
  
  regForm:any
  objToSend:any

  constructor(private router: Router, private cookie: CookieService,  private location: Location,
    private eventService: EventService,private notificationService: NotificationService) {
      
    
   }

  ngOnInit(): void {
    this.eventService.getRegistrationForm( this.router.url.split('/')[2]).subscribe(
        data => {
          console.log(data)
          this.regForm=data
        },
        error => {
          console.log(error)
        }
      )
  }

  saveFormdata(){
    this.objToSend ={
      simpleForm:this.forms,
      fieldForm:this.regForm
    }
    this.eventService.registerUser({ objToSend: this.objToSend }, this.router.url.split('/')[2]).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.notificationService.showInfo(this.message, "Registered successfully")
        } 
      },
      error => {
        this.notificationService.showError(error.error.error, "Error in Registration")
      }
    )
  }

}
