import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email_address = {text: "", isNotEmpty: false}
  isInvalid = false
  errorText = ""

  constructor(private router: Router, private authService: AuthenticationService) { }

  btnClicked = false

  ngOnInit(): void {
  }

  buttonClicked() {
    this.btnClicked = !this.btnClicked
  }

  backButton() {
    this.router.navigate(['/login'])
  }

  inputData(e: any) {
    if (e.name === 'email_address') {
      if (!e.data) {
        this.email_address.isNotEmpty = false
      } else {
        this.email_address.text = e.data
        this.email_address.isNotEmpty = true
      }
    }
  }

  forgotPassword() {
    if (this.email_address.isNotEmpty) {
      this.authService.forgotPassword({ email_address: this.email_address.text }).subscribe(
        data => {
          this.router.navigate(
            ['/forgot-password/success', {text: 'Please check your email to reset your password.'}],
            { skipLocationChange: true }
          )
        },
        error => {
          this.isInvalid = true
          this.errorText = error.error.error
        }
      )
    } else {
      this.btnClicked = false
    }
  }
}
