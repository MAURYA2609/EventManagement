import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AbstractService } from 'src/app/services/abstract/abstract.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-abstract-list',
  templateUrl: './abstract-list.component.html',
  styleUrls: ['./abstract-list.component.css']
})
export class AbstractListComponent implements OnInit {

  page = 1
  count = 0
  pageLimit = 5
  pageLimits = [2, 5, 10, 15, 20]
  abstractList: any

  event_id = ""
  token = ""
  message = ""

  constructor(
    private router: Router,
    private cookie: CookieService,
    private notificationService: NotificationService,
    private abstractService: AbstractService
  ) {
    this.event_id = this.router.url.split("/")[2]
    this.token = this.cookie.get("jwt")
    this.getAllAbstracts()
  }
  fetchData(data: any) {
    if (data.message) this.message = data.message
  }

  ngOnInit(): void {
  }

  searchAbstract(e: any) {

  }

  getAllAbstracts() {
    this.abstractService.viewAllAbstract(this.event_id, { token: this.token }).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.fetchData(data)
          this.notificationService.showInfo(this.message, "Info")
        } else {
          this.abstractList = data
          console.log(data)
        }
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  onPageChanged(e: any) {
    this.page = e
    this.getAllAbstracts();
  }

  onPageLimitChanged(e: any) {
    this.pageLimit = e.target.value
    this.page = 1
    this.getAllAbstracts()
  }

}
