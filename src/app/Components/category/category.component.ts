import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category_id: string = ""
  @Input() category_title: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
