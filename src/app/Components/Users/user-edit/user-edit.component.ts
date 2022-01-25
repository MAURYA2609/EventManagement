import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  is_admin = false

  personalFlag = true
  contactFlag = false
  affiliationFlag = false
  credentialsFlag = false

  constructor(private router: Router, private cookie: CookieService) {
    this.is_admin = JSON.parse(atob(cookie.get('jwt').split('.')[1])).is_admin
  }

  ngOnInit(): void {
  }

  sliderIconFlag = false

  openSlider() {
    this.sliderIconFlag = !this.sliderIconFlag
  }

  closeSlider() {
    this.sliderIconFlag = false
  }

  personalTabClicked() {
    this.personalFlag = true
    this.contactFlag = false
    this.affiliationFlag = false
    this.credentialsFlag = false
  }

  contactTabClicked() {
    this.personalFlag = false
    this.contactFlag = true
    this.affiliationFlag = false
    this.credentialsFlag = false
  }

  affiliationTabClicked() {
    this.personalFlag = false
    this.contactFlag = false
    this.affiliationFlag = true
    this.credentialsFlag = false
  }

  credentialsTabClicked() {
    this.personalFlag = false
    this.contactFlag = false
    this.affiliationFlag = false
    this.credentialsFlag = true
  }

}
