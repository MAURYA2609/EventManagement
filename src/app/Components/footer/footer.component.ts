import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  changeHeaderWidth: boolean = false
  url: any

  public screenWidth: any

  constructor(router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url = e.url.split('/').pop()
        if (this.url == "submit-abstract" || this.url == "create-event") {
          if (this.screenWidth < 600) {
            this.changeHeaderWidth = true
          } else {
            this.changeHeaderWidth = false
          }
        }
      }
    })
   }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth
    if (this.url == "submit-abstract" || this.url == 'create-event') {
      if (this.screenWidth < 600) {
        this.changeHeaderWidth = true
      } else {
        this.changeHeaderWidth = false
      }
    }
  }
}
