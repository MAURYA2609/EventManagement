import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  errorText = ""
  isInvalid = false
  btnClicked = false
  password_mismatch = false

  password = { text: '', isNotEmpty: false }
  confirm_password = { text: '', isNotEmpty: false }

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService, private cookie: CookieService) { }

  ngOnInit(): void {
  }

  inputData(e: any) {
    if (e.name === 'new_password') {
      if (!e.data) {
        this.password.isNotEmpty = false
      } else {
        this.password.text = e.data
        this.password.isNotEmpty = true
      }
    }
    if (e.name === 'confirm_new_password') {
      if (!e.data) {
        this.confirm_password.isNotEmpty = false
      } else {
        this.confirm_password.text = e.data
        this.confirm_password.isNotEmpty = true
      }
    }
  }

  buttonClicked() {
    this.btnClicked = !this.btnClicked
  }

  backButton() {
    this.router.navigate(['/login'])
  }

  resetUserPassword() {
    if (this.password.isNotEmpty && this.confirm_password.isNotEmpty) {
      if (this.password.text !== this.confirm_password.text) {
        this.password_mismatch = true
      } else {
        const token = this.route.snapshot.queryParams['token']
        this.authService.resetPassword({
          token: token,
          password: this.password.text
        }).subscribe(
          data => {
            this.router.navigate(['/login'])
          },
          error => {
            console.log(error)
            this.isInvalid = true
            this.errorText = error.error.error
          }
        )
      }
    } else {
      this.btnClicked = false
    }
  }

}
