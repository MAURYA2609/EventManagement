import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service'
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-configure-form',
  templateUrl: './configure-form.component.html',
  styleUrls: ['./configure-form.component.css']
})
export class ConfigureFormComponent implements OnInit {

  message=""

  newfield:any ={
    type:"",
    title:"",
    description:"",
    is_enabled:""
  }
  
  tt =[
    {type:'text',names:'Text'},
    {type:'textarea',names:'Textarea'},
    {type:'email',names:'Email'},
    {type:'number',names:'Number'},
    {type:'date',names:'Date'}
  ]
  constructor(private router: Router, private cookie: CookieService,  private location: Location,
    private eventService: EventService,private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  setEnable(e:any){
    if(e.checked){
      this.newfield.is_enabled=true
    }
    else{
      this.newfield.is_enabled=false
    }
  }

  addField(){
    console.log(this.newfield)
    this.eventService.addField({ objToSend: this.newfield }, this.router.url.split('/')[2],this.router.url.split('/')[5]).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.notificationService.showInfo(this.message, "Field Added")
        } 
      },
      error => {
        this.notificationService.showError(error.error.error, "Field not added")
      }
    )
  }

}
