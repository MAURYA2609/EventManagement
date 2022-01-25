import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-affiliation',
  templateUrl: './affiliation.component.html',
  styleUrls: ['./affiliation.component.css']
})
export class AffiliationComponent implements OnInit {

  username = ""

  currentUserDetail: any = {
    affiliation_name: "",
    affiliation_email: "",
  }

  token = ""

  changedUserDetail: any = {
    affiliation_name: "",
    affiliation_email: "",
  }

  affiliation_name = {text: "", isNotEmpty: false}
  affiliation_email = {text: "", isNotEmpty: false}

  btnClicked = false

  constructor(private router: Router, private cookie: CookieService, private userService: UserService) {
    this.username = this.router.url.split('/')[1]
    this.token = this.cookie.get('jwt')
    this.username = this.router.url.split('/')[1]
    userService.getAffiliationDetail(this.username, { token: this.token }).subscribe(
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

  inputData(e: any) {
    if (e.name === 'affiliation_name') {
      if (!e.data) {
        this.affiliation_name.isNotEmpty = false
      } else {
        this.affiliation_name.text = e.data
        this.affiliation_name.isNotEmpty = true
      }
    }
    if (e.name === 'affiliation_email') {
      if (!e.data) {
        this.affiliation_email.isNotEmpty = false
      } else {
        this.affiliation_email.text = e.data
        this.affiliation_email.isNotEmpty = true
      }
    }
  }

  buttonClicked() {
    this.btnClicked = true
  }

  editAffiliationDetail() {

  }

}
