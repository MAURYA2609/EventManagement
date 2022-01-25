import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
  btnClicked = false

  username_params = ""

  currentUserDetail: any = {
    username: "",
  }

  token = ""

  changedUserDetail: any = {
    username: "",
    password: "",
  }

  username = {text: "", isNotEmpty: false}
  password = {text: "", isNotEmpty: false}
  confirm_password = {text: "", isNotEmpty: false}

  constructor(private router: Router, private cookie: CookieService, private userService: UserService) {
    this.username_params = this.router.url.split('/')[1]
    this.token = this.cookie.get('jwt')
    this.username_params = this.router.url.split('/')[1]
    userService.getCredentialDetail(this.username_params, { token: this.token }).subscribe(
      data => {
        this.currentUserDetail = data
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.btnClicked = true
  }

  inputData(e: any) {
    if (e.name === 'username') {
      if (!e.data) {
        this.username.isNotEmpty = false
      } else {
        this.username.text = e.data
        this.username.isNotEmpty = true
      }
    }
    if (e.name === 'password') {
      if (!e.data) {
        this.password.isNotEmpty = false
      } else {
        this.password.text = e.data
        this.password.isNotEmpty = true
      }
    }
    if (e.name === 'confirm_password') {
      if (!e.data) {
        this.confirm_password.isNotEmpty = false
      } else {
        this.confirm_password.text = e.data
        this.confirm_password.isNotEmpty = true
      }
    }
  }

  editCredentialDetail() {

  }

}
