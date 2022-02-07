import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/services/event/event.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  event_id = ""
  token = ""

  materials: any = []

  materialFile: any

  constructor(
    private router: Router,
    private cookie: CookieService,
    private notificationService: NotificationService,
    private eventService: EventService) {
    this.event_id = this.router.url.split("/")[2]
    this.token = this.cookie.get("jwt")
    this.eventService.getEventMaterial({ token: this.token}, this.event_id).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.notificationService.showWarning("No file added for material.", "Warning")
        } else {
          this.materials = data
        }
      },
      error => {
        this.notificationService.showError("Error", error.error)
      }
    )
  }

  ngOnInit(): void {
  }

  file: any
  package: any

  onFileSelected(e: any) {
    const fileType = e.target.files[0].name.split(".").pop()
    if (fileType == 'doc' || fileType == 'docx' || fileType == 'pdf') {
      this.file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', this.file)
      formData.append('token', this.token)
      this.eventService.setEventMaterial(this.event_id, formData).subscribe(
        data => {
          console.log(data)
        },
        error => {
          this.notificationService.showError(error.error.error, "Error")
        }
      )
    } else {
      this.notificationService.showError("Invalid file type", "File extension not accepted.")
    }
  }

  onPackageSelected(e: any) {
    const fileType = e.target.files[0].name.split(".").pop()
    if (fileType == 'rar' || fileType == 'zip') {
      this.package = e.target.files[0]
    } else {
      this.notificationService.showError("Invalid file type", "File extension not accepted.")
    }
  }

  viewMaterial(e: any) {
    this.eventService.viewEventMaterial(this.event_id, e, { token: this.token }).subscribe(
      data => {
        this.fetchData(data)
        console.log(this.materialFile)
      }
    )
  }

  fetchData(data: any) {
    this.materialFile = data.data.data
  }
}
