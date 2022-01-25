import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { timezone } from 'src/app/constants';
import { EventService } from 'src/app/services/event/event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent implements OnInit {

  timezones = timezone

  public = true
  inheriting = false
  protected = false
  isAddBtnClicked = false
  isInvalid = false

  token = ""
  event_title = ""
  event_description = ""
  event_label = ""
  start_date = ""
  end_date = ""
  timezone = ""
  venue = ""
  room = ""
  address = ""
  map_url = ""
  protect_mode = ""
  additional_info = ""
  keyword = ""
  keywords: Array<string> = []

  errorText = ""

  showError = {
    event_title: false,
    event_description: false,
    start_date: false,
    end_date: false,
    timezone: false,
    venue: false,
    address: false,
    additional_info: false,
  }

  constructor(private router: Router, private cookie: CookieService, private eventService: EventService, private location: Location) {}

  ngOnInit(): void {
  }

  publicModeBtnClicked() {
    this.public = true
    this.inheriting = false
    this.protected = false
  }

  inheritingModeBtnClicked() {
    this.public = false
    this.inheriting = true
    this.protected = false
  }

  protectedModeBtnClicked() {
    this.public = false
    this.inheriting = false
    this.protected = true
  }

  addEventTitle(e: any) {
    if (e !== null) {
      this.showError.event_title = false
      this.event_title = e
    } else {
      this.showError.event_title = true
    }
  }

  addEventDescription(e: any) {
    if (e !== null) {
      this.showError.event_description = false
      this.event_description = e
    } else {
      this.showError.event_description = true
    }
  }

  addEventLabel(e: any) {
      this.event_label = e
  }

  addEventDates(e: any, name: string) {
    if (name === 'start_date') {
      if (e !== null) {
        this.showError.start_date = false
        this.start_date = e
      } else {
        this.showError.start_date = true
      }
    }
    else if (name === 'end_date') {
      if (e !== null) {
        this.showError.end_date = false
        this.end_date = e
      } else {
        this.showError.end_date = true
      }
    }
  }

  addEventTimezone(e: any) {
    if (e !== null) {
      this.showError.timezone = false
      this.timezone = e
    } else {
      this.showError.timezone = true
    }
  }

  addEventVenue(e: any) {
    if (e !== null) {
      this.showError.venue = false
      this.venue = e
    } else {
      this.showError.venue = true
    }
  }

  addEventRoom(e: any) {
    this.room = e
  }

  addEventAddress(e: any) {
    if (e !== null) {
      this.showError.address = false
      this.address = e
    } else {
      this.showError.address = true
    }
  }

  addEventMapUrl(e: any) {
    this.map_url = e
  }

  addEventAdditionalInfo(e: any) {
    console.log(e)
    if (e !== null) {
      this.showError.additional_info = false
      this.additional_info = e
    } else {
      this.showError.additional_info = true
    }
  }

  addEventKeywords(e: string) {
      if (e.length !== 0) {
        this.keywords.push(e)
        this.keyword = ''
        this.isAddBtnClicked = false
      }
  }

  nextButtonClicked() {
    this.checkValidation()
    if (this.public) this.protect_mode = "public"
    else if (this.inheriting) this.protect_mode = "inheriting"
    else if (this.protected) this.protect_mode = "protected"
    if (!this.showError.event_title &&
      !this.showError.event_description &&
      !this.showError.start_date &&
      !this.showError.end_date &&
      !this.showError.timezone &&
      !this.showError.venue &&
      !this.showError.address &&
      !this.showError.additional_info) {
        this.token = this.cookie.get("jwt")
        const newEventObj = {
          token: this.token,
          event_title: this.event_title,
          event_description: this.event_description,
          event_label: this.event_label,
          start_dt: this.start_date,
          end_dt: this.end_date,
          timezone: this.timezone,
          venue: this.venue,
          room: this.room,
          address: this.address,
          map_url: this.map_url,
          keyword: this.keywords,
          protect_mode: this.protect_mode
        }
        this.eventService.createEvent(newEventObj).subscribe(
          data => {
            this.location.back()
          },
          error => {
            this.errorText = error.error.error
            this.isInvalid = true
          }
        )
    }

  }

  checkValidation() {
    if (this.event_title === "") {
      this.showError.event_title = true
    }
    if (this.event_description === "") {
      this.showError.event_description = true
    }
    if (this.start_date === "") {
      this.showError.start_date = true
    }
    if (this.end_date === "") {
      this.showError.end_date = true
    }
    if (this.timezone === "") {
      this.showError.timezone = true
    }
    if (this.venue === "") {
      this.showError.venue = true
    }
    if (this.address === "") {
      this.showError.address = true
    }
  }

}
