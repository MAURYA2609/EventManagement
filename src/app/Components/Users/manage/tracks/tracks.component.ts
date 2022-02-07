import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
//import { TrackInputComponent } from 'src/app/components/dialog/track-input/track-input.component';
//import { ViewTrackComponent } from 'src/app/components/dialog/view-track/view-track.component';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { TrackService } from 'src/app/services/track/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracksList: any
  token = ""
  event_id = ""
  message = ""
  objToSend = {
    title: "",
    code: "",
    description: "",
    token: ""
  }

  constructor(
    private router: Router,
    private cookie: CookieService,
    private notificationService: NotificationService,
    private trackService: TrackService,
    private dialog: MatDialog,
  ) {
    this.event_id = this.router.url.split("/")[2]
    this.token = this.cookie.get("jwt")
    this.trackService.trackList(this.event_id, { token: this.token }).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.fetchData(data)
          this.notificationService.showInfo(this.message, "Info")
        } else {
          this.tracksList = data
        }
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  ngOnInit(): void {
  }
/*
  onViewClicked(track: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = {
      id: track._id,
      title: track.title,
      description: track.description,
      code: track.code
    }
    dialogConfig.width = '30%'
    this.dialog.open(ViewTrackComponent, dialogConfig)
  }
*/
  onEditClicked(track: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.data = {
      id: track._id,
      title: track.title,
      description: track.description,
      code: track.code
    }
    dialogConfig.width = '30%'
    /*const dialogRef = this.dialog.open(TrackInputComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      res => {
        if (res.title, res.code, res.description) {
          this.objToSend.title = res.title
          this.objToSend.code = res.code
          this.objToSend.description = res.description
          this.objToSend.token = this.token
          this.trackService.updateTrackDetail(this.event_id, track._id, this.objToSend).subscribe(
            data => {
              this.fetchData(data)
              this.notificationService.showSuccess(this.message, "Success")
              this.router.navigate([this.router.url], { replaceUrl: true })
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      }
    )*/
  }

  onDeleteClicked(id: any) {
    console.log(id)
    this.trackService.deleteTrack(this.event_id, id, { token: this.token }).subscribe(
      data => {
        this.fetchData(data)
        this.notificationService.showSuccess(this.message, "Success")
        this.router.navigate([this.router.url], { replaceUrl: true })
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  addNewTrack() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '30%'
    dialogConfig.data = {
      id: "",
      title: "",
      description: "",
      code: "",
    }
   /* const dialogRef = this.dialog.open(TrackInputComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      res => {
        if (res.title, res.code, res.description) {
          this.objToSend.title = res.title
          this.objToSend.code = res.code
          this.objToSend.description = res.description
          this.objToSend.token = this.token
          this.trackService.createNewTrack(this.event_id, this.objToSend).subscribe(
            data => {
              this.fetchData(data)
              this.notificationService.showSuccess(this.message, "Success")
              this.router.navigate([this.router.url], { replaceUrl: true })
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      }
    )*/
  }

  fetchData(data: any) {
    if (data.message) this.message = data.message
  }

}
