import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() eventObj = {
    event_id: "",
    event_title: "",
    start_date: "",
    end_date: "",
    manager: "",
  }
  @Input () category_title = ""

  constructor() {}

  ngOnInit(): void {
  }

}
