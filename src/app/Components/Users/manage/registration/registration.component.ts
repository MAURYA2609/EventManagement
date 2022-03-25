import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  forms:any

  constructor(private router: Router, private cookie: CookieService,  private location: Location,private eventService: EventService) { 
    this.eventService.getAllForms(this.router.url.split('/')[2]).subscribe(
      data => {
        this.forms =data
        console.log(this.forms)
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}
