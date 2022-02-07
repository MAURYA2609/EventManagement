import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-detail',
  templateUrl: './abstract-detail.component.html',
  styleUrls: ['./abstract-detail.component.css']
})
export class AbstractDetailComponent implements OnInit {

  @Input() abstractDetailObj: any

  constructor() { }

  ngOnInit(): void {
  }

}
