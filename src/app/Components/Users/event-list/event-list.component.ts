import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  isRequired = false

  url: string = ""

  events: any = []

  constructor(private router: Router, private eventService: EventService) {
    this.url = this.router.url + "/create-event"
    this.events =[ {event_id:"1", event_title:"trying title", start_date:"1/1/2001",end_date:"2/2/2002",manager:"maurya"},
    {event_id:"2", event_title:"trying title 2", start_date:"3/3/2003",end_date:"4/4/2004",manager:"jay"}];
    this.eventService.fetchAllEvent().subscribe(
      data => {
        this.events = data
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }
  // displayedColumns: string[] = ['name', 'date', 'manager'];
  // dataSource = new MatTableDataSource(this.events);

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  changePage() {

  }

}
