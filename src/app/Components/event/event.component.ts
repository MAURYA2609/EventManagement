import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() eventObj = {
    eid: "",
    title: "",
    start_time: "",
    end_time: ""
  }
  @Input () category_title = ""

  constructor() {}

  ngOnInit(): void {
  }

}
