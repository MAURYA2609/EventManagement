import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginUser } from 'src/app/models/login-user.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  visible: boolean = false
  btnClicked: boolean = false
  isInvalid: boolean = false
  title = 'WebManagement';
  errorText = ""
  

  username = {text: "", isNotEmpty: false}
  password = {text: "", isNotEmpty: false}

  user: LoginUser = {
      username: "",
      password: ""
  }

  constructor(
    
    private router: Router,
    private cookie: CookieService,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onTogglePassword() {
    this.visible = !this.visible
  }

  buttonClicked() {
    this.btnClicked = !this.btnClicked
  }

  inputData(e: any) {
    if (e.name === 'username') {
      if (!e.data) {
        this.username.isNotEmpty = false
      } else {
        this.username.text = e.data
        this.username.isNotEmpty = true
      }
    } else if (e.name === 'password') {
      if (!e.data) {
        this.password.isNotEmpty = false
      } else {
        this.password.text = e.data
        this.password.isNotEmpty = true
      }
    }
  }

  loginUser() {
    if (this.username.isNotEmpty && this.password.isNotEmpty) {
      this.user.username = this.username.text
      this.user.password = this.password.text
      this.authService.loginUser(this.user).subscribe(
        res => {
          if (res.hasOwnProperty('token')) {
            const data = this.getDataFromObj(res)
            console.log(data)
            this.cookie.set("jwt", data)
            this.router.navigate(['/'])
            
          } else {
            const data = this.getDataFromObj(res)
            this.router.navigate(['/login/verification-required', { text: data }], { skipLocationChange: true })
          }
        },
        error => {
          console.log(error)
          this.errorText = error.error.error
          this.isInvalid = true
        }
      )
    } else {
      this.btnClicked = false
    }
  }

  getDataFromObj(data: any) {
    if (data.token) return data.token
    else return data.text
  }
}
