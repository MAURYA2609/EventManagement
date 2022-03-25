import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AbstractService } from 'src/app/services/abstract/abstract.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { TrackService } from 'src/app/services/track/track.service';
import { AuthorTypeSelectorComponent } from '../../dialog/author-type-selector/author-type-selector.component';
import { SearchAuthorComponent } from '../../dialog/search-author/search-author.component';

@Component({
  selector: 'app-submit-new-abstract',
  templateUrl: './submit-new-abstract.component.html',
  styleUrls: ['./submit-new-abstract.component.css']
})
export class SubmitNewAbstractComponent implements OnInit {

  files: any
  authorsList: Array<any> = []
  tracks: any
  message = ""
  event_id = ""
  token = ""

  constructor(
    private router: Router,
    private cookie: CookieService,
    private abstractService: AbstractService,
    private notificationService: NotificationService,
    private trackService: TrackService,
    private dialog: MatDialog) {
      this.event_id = this.router.url.split("/")[2]
      this.token = this.cookie.get("jwt")
      this.trackService.trackList(this.event_id, { token: this.token }).subscribe(
        data => {
          if (data.hasOwnProperty("message")) {
            this.fetchData(data)
            this.notificationService.showInfo(this.message, "Info")
          } else this.tracks = data
          console.log(data)
        },
        error => {
          this.notificationService.showError(error.error.error, "Error fetching track")
        }
      )
    }

  ngOnInit(): void {
  }

  dragUploadFile(e: any) {
    if (this.files.length == 0)
      this.files.push(e[0])
  }

  browseUploadFile(e: any) {
    this.files = e.target.files[0]
    console.log(this.files)
  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  addMyself() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '30%'
    const dialogRef = this.dialog.open(AuthorTypeSelectorComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      res => {
        if (res.author && res.coauthor) {
          this.notificationService.showWarning("Cannot add user to both Author as well as Co-Author.", "Warning")
        } else if (!res.author && !res.coauthor) {
          this.notificationService.showWarning("Need to add user to Author or Co-Author.", "Warning")
        } else {
          let author_type: any
          let is_speaker: any
          if (res.author) {
            author_type = 1
            is_speaker = true
          } else {
            author_type = 2
            is_speaker = false
          }
          const temporaryObj = {
            name: "Myself",
            user_id: (JSON.parse(atob(this.token.split('.')[1])))._id,
            author_type: author_type,
            is_speaker: is_speaker
          }
          console.log(temporaryObj)
          this.authorsList.push(temporaryObj)
        }
      }
    )
  }

  addUser() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '30%'
    const dialogRef = this.dialog.open(SearchAuthorComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(
      res => {
        if (res.author && res.coauthor) {
          this.notificationService.showWarning("Cannot add user to both Author as well as Co-Author.", "Warning")
        } else if (!res.author && !res.coauthor) {
          this.notificationService.showWarning("Need to add user to Author or Co-Author.", "Warning")
        } else {
          let author_type: any
          let is_speaker: any
          if (res.author) {
            author_type = 1
            is_speaker = true
          } else {
            author_type = 2
            is_speaker = false
          }
          const temporaryObj = {
            name: res.user.name,
            user_id: res.user._id,
            author_type: author_type,
            is_speaker: is_speaker
          }
          this.authorsList.push(temporaryObj)
        }
      }
    )
  }

  submitAbstract(title: any,  contributionType: any, comments: any, track_id: any) {
    console.log(title, contributionType, comments, track_id)
    if (title &&  contributionType && this.authorsList.length != 0 && track_id) {
      const formData = new FormData()
      formData.append("file", this.files)
      formData.append("token", this.token)
      formData.append("title", title)
      formData.append("contribution_type", contributionType)
      for (let i = 0; i < this.authorsList.length; i++) {
        formData.append("authors_list", this.authorsList[i])
      }
      formData.append("comments", comments)
      formData.append("track_id", track_id)
      this.abstractService.submitNewAbstract(this.event_id, formData).subscribe(
        data => {
          console.log(data)
          this.fetchData(data)
          this.notificationService.showSuccess(this.message, "Success")
        },
        err => {
          console.log(err)
          this.notificationService.showError(err.error.error, "Error")
        }
      )
    } else {
      this.notificationService.showError("Fields having * are required", "Error")
    }
  }
  fetchData(data: any) {
    if (data.message) this.message = data.message
  }
}
