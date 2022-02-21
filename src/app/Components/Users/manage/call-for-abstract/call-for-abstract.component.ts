import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CallForAbstractInputComponent } from 'src/app/Components/dialog/call-for-abstract-input/call-for-abstract-input.component';
import { AbstractService } from 'src/app/services/abstract/abstract.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-call-for-abstract',
  templateUrl: './call-for-abstract.component.html',
  styleUrls: ['./call-for-abstract.component.css']
})
export class CallForAbstractComponent implements OnInit {

  date = "Nov 15, 2021"
  deadline = "11:59 PM"
  timezone = "Asia/Mumbai"

  event_id: any = ""
  token: any = ""
  created = false
  is_open = false
  message = ""

  objToSend = {
    end_dt: "",
    timezone: "",
    token: "",
  }

  constructor(
    private router: Router,
    private cookie: CookieService,
    private abstractService: AbstractService,
    private notificationService: NotificationService,
    private dialog: MatDialog) {
    this.event_id = this.router.url.split("/")[2]
    this.token = this.cookie.get("jwt")
    this.objToSend.token = this.token
    abstractService.getCallForAbstract(this.event_id, { token: this.token }).subscribe(
      data => {
        this.fetchData(data)
        if (data.hasOwnProperty("message"))
          this.notificationService.showInfo(this.message, "Info")
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  ngOnInit(): void {
  }

  rescheduleBtn() {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = {
      open: true,
      reschedule: false,
    }
    dialogConfig.width = '30%'

    const dialogRef = this.dialog.open(CallForAbstractInputComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      res => {
        if (res.end_dt && res.timezone) {
          this.objToSend.end_dt = res.end_dt
          this.objToSend.timezone = res.timezone
          console.log(this.objToSend)
          this.abstractService.rescheduleCallForAbstract(this.event_id, this.objToSend).subscribe(
            data => {
              this.fetchData(data)
              this.notificationService.showSuccess(this.message, "Success")
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      }
    )
  }

  openBtn() {

    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = {
      open: true,
      reschedule: false,
    }
    dialogConfig.width = '30%'

    const dialogRef = this.dialog.open(CallForAbstractInputComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      res => {
        if (res.end_dt && res.timezone) {
          this.objToSend.end_dt = res.end_dt
          this.objToSend.timezone = res.timezone
          console.log(this.objToSend)
          this.abstractService.openCallForAbstract(this.event_id, this.objToSend).subscribe(
            data => {
              this.fetchData(data)
              this.notificationService.showSuccess(this.message, "Success")
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      }
    )
  }

  reopenBtn() {
    this.abstractService.reopenCallForAbstract(this.event_id, { token: this.token }).subscribe(
      data => {
        this.fetchData(data)
        this.notificationService.showSuccess(this.message, "Success")
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  closeBtn() {
    this.abstractService.closeCallForAbstract(this.event_id, { token: this.token }).subscribe(
      data => {
        this.fetchData(data)
        this.notificationService.showSuccess(this.message, "Success")
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  fetchData(data: any) {
    if (data.message) this.message = data.message
    if (data.is_open) this.is_open = data.is_open
    if (data.created) this.created = data.created
    if (data.objToSend) {
      this.date = data.objToSend.date
      this.deadline = data.objToSend.time
      this.timezone = data.objToSend.timezone
    }
  }

  openAbstractList() {
    const url = this.router.url
    this.router.navigate([url+'/list'])
  }

}
