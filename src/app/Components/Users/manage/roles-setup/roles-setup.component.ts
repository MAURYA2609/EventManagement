import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { RolesSetupComponent as RolesInputComponent} from 'src/app/Components/dialog/roles-setup/roles-setup.component';
import { CookieService } from 'ngx-cookie-service';
import { SearchUserComponent } from 'src/app/Components/dialog/search-user/search-user.component';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-roles-setup',
  templateUrl: './roles-setup.component.html',
  styleUrls: ['./roles-setup.component.css']
})
export class RolesSetupComponent implements OnInit {

  token = ""
  event_id = ""
  rolesList: any

  role = {
    role_id: "",
    code: "",
    name: "",
    color: "",
    token: ""
  }

  message = ""

  showRoleMembers = false
  constructor(
    private router: Router,
    private cookie: CookieService,
    private eventService: EventService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {
    this.event_id = this.router.url.split('/')[2]
    this.token = this.cookie.get('jwt')
    this.eventService.roleList(this.event_id, { token: this.token }).subscribe(
      data => {
        if (data.hasOwnProperty("message")) {
          this.fetchData(data)
          this.notificationService.showInfo(this.message, "Info")
        } else {
          this.rolesList = data
          console.log(this.rolesList)
        }
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  ngOnInit(): void {
  }

  fetchData(data: any) {
    this.message = data.message
  }

  showMembersList() {
    this.showRoleMembers = !this.showRoleMembers
  }

  addRole() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '30%'
    dialogConfig.data = {
      name: "",
      code: "",
      color: "",
    }
    const dialogRef = this.dialog.open(RolesInputComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.name && data.code && data.color) {
          this.role = data
          this.role.token = this.token
          this.eventService.roleSetup(this.event_id, this.role).subscribe(
            data => {
              console.log(data)
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      }
    )
  }

  updateRole(role: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '30%'
    dialogConfig.data = {
      name: role.name,
      code: role.code,
      color: role.color,
    }
    const dialogRef = this.dialog.open(RolesInputComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if (data.name && data.code && data.color) {
          this.role = data
          this.role.token = this.token
          this.role.role_id = role._id
          console.log(this.role)
          this.eventService.rolesUpdate(this.event_id, this.role).subscribe(
            data => {
              this.fetchData(data)
              this.notificationService.showError(this.message, "Success")
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      }
    )
  }

  deleteRole(id: any) {
    this.eventService.rolesDelete(this.event_id, { role_id: id, token: this.token }).subscribe(
      data => {
        this.fetchData(data)
        this.notificationService.showSuccess(this.message, "Success")
      },
      error => {
        this.notificationService.showError(error.error.error, "Error")
      }
    )
  }

  addMember(id: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = '30%'

    const dialogRef = this.dialog.open(SearchUserComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          console.log(data)
          this.eventService.setMember(this.event_id, id, { token: this.token, user_id: data._id }).subscribe(
            data => {
              this.fetchData(data)
              this.notificationService.showSuccess(this.message, "Success")
            },
            error => {
              this.notificationService.showError(error.error.error, "Error")
            }
          )
        }
      },
      error => {
        this.notificationService.showError(error.error, "Error")
      })
  }

  deleteMember(user_id: any, role_id: any) {
    this.eventService.deleteMember(this.event_id, role_id, { token: this.token, user_id: user_id }).subscribe(
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
