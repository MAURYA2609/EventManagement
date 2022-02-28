import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.css']
})
export class ManageEventComponent implements OnInit {

  eventFlag = 0
  trackFlag = 0
  abstractFlag = 0
  materialFlag = true
  rolesSetupFlag = false
  logsFlag = false

  sliderIconFlag = false

  url: any

  manageDetailObj = {
    event_title: "",
    event_duration: "",
    creator_email: "",
  }

  constructor(private router: Router, private cookie: CookieService, private eventService: EventService) {
    this.url = this.router.url
    const token = cookie.get('jwt')
    console.log(this.url)
    eventService.getEventDetails( this.url.split('/')[2]).subscribe(
      data => {
        this.fetchDataFromObj(data)
        console.log(this.manageDetailObj)
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

  fetchDataFromObj(data: any) {
    this.manageDetailObj.event_title = data.title
    this.manageDetailObj.event_duration = data.start_time
    this.manageDetailObj.creator_email = data.creator_email
  }

  eventTabClicked() {
    this.eventFlag++
  }

  eventTabTextClicked() {
    this.eventFlag--
  }

  trackTabClicked() {
    this.trackFlag++
  }

  trackTabTextClicked() {
    this.trackFlag--
  }

  abstractTabClicked() {
    this.abstractFlag++
  }

  abstractTabTextClicked() {
    this.abstractFlag--
  }

  materialTabClicked() {
    this.materialFlag = true
    this.rolesSetupFlag = false
    this.logsFlag = false
  }

  rolesSetupTabClicked() {
    this.materialFlag = false
    this.rolesSetupFlag = true
    this.logsFlag = false
  }

  logsTabClicked() {
    this.materialFlag = false
    this.rolesSetupFlag = false
    this.logsFlag = true
  }

  openSlider() {
    this.sliderIconFlag = !this.sliderIconFlag
  }

  closeSlider() {
    this.sliderIconFlag = false
  }
}
