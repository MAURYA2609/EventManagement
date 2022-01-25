import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {

  error = ""

  constructor(private router: ActivatedRoute) {
    this.error = router.snapshot.queryParams['error']
  }

  ngOnInit(): void {
  }

}
