import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent implements OnInit {

  displayText = ""
  error = false

  constructor(private route: ActivatedRoute) {
    this.route.params.forEach((i) => {
      this.displayText = i['text']
    })
  }

  ngOnInit(): void {
  }

}
