import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  isRequired = true
  submitAbstractUrl = ""
  registerUrl=""
  manageEventUrl = ""
  event_title = ""
  event_duration = ""
  event_timezone = ""
  event_label = ""
  start_dt = ""
  end_dt = ""
  event_address = ""
  manager_contact_numbers: any
  chairpersons = []
  material_title = ""
  event_description = ""
  additional_info: any

  constructor(private router: Router, private eventService: EventService) {
    this.submitAbstractUrl = this.router.url + "/submit-abstract"
    this.registerUrl= this.router.url + "/register"
    this.manageEventUrl = this.router.url + "/manage"
    eventService.getEventDetails(this.router.url.split('/').pop()).subscribe(
      data => {
        this.setDataFromObj(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

  setDataFromObj(data: any) {
    this.event_title = data.title
    this.event_duration = data.event_duration
    this.event_timezone = data.timezone
    this.event_label = data.event_label
    this.event_address = data.address
    this.manager_contact_numbers = data.manager_contact_numbers
    this.event_description = data.description
    this.start_dt = data.start_time
    this.end_dt = data.end_time
    this.additional_info = data.additional_info
  }

}
