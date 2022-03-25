import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  basicFormUrl =""
  configureFormUrl = ""

  constructor(private router: Router, private cookie: CookieService,  private location: Location,private eventService: EventService) { 
    
    this.basicFormUrl = this.router.url + "/basicform"
    this.configureFormUrl = this.router.url + "/configureform"

  }

  ngOnInit(): void {
  }

}
