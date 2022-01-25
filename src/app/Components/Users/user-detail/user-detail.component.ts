import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  username: any
  user_object: any = {
    fullname: "",
    is_admin: false,
    is_system: false,
    is_deleted: false,
    is_blocked: false,
  }
  user_role = ""
  is_admin = false
  admin = false
  system = false
  blocked = false
  deleted = false
  is_allowed = true
  is_successful = true
  error_text = ""


  constructor(private userService: UserService, private cookie: CookieService, private router: Router) {
    this.username = router.url.split('/').pop()
    const token = cookie.get('jwt')
    if (token) {
      const token_data = JSON.parse(atob(token.split('.')[1]))
      if (token_data.username == this.username) {
        this.is_allowed = false
        this.is_admin = token_data.is_admin
      }
    }
    userService.getUserDetail(this.username).subscribe(
      data => {
        this.is_successful = true
        this.user_object = data
        if (this.user_object.is_admin) {
          this.user_role = "Admin"
          this.admin = true
        } else if (this.user_object.is_system) {
          this.user_role = "System"
          this.system = true
        } else if (this.user_object.is_deleted) {
          this.user_role = "Deleted"
          this.deleted = true
        } else if (this.user_object.is_blocked) {
          this.user_role = "Blocked"
          this.blocked = true
        }
      },
      error => {
        this.error_text = error.error.error
        this.is_successful = false
      }
    )
  }

  ngOnInit(): void {
  }

  openSetting() {
    this.router.navigate([`/${ this.username }/edit/personal`])
  }

  blockUser() {
    this.userService.blockUser(this.username).subscribe(
      data => {
        this.is_successful = true
        console.log(data)
      },
      error => {
        this.error_text = error.error.error
        this.is_successful = false
      })
  }
}
