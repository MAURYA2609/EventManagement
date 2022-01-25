import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() title: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
