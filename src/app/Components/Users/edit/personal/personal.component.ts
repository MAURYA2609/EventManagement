import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  btnClicked = false

  username = ""

  currentUserDetail: any = {
    first_name: "",
    last_name: "",
    dob: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    country: "",
    token: ""
  }

  token = ""

  changedUserDetail: any = {
    first_name: "",
    last_name: "",
    dob: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    country: ""
  }

  first_name = {text: "", isNotEmpty: true}
  last_name = {text: "", isNotEmpty: true}
  dob = {text: "", isNotEmpty: true}
  address_line1 = {text: "", isNotEmpty: true}
  address_line2 = {text: ""}
  city = {text: "", isNotEmpty: true}
  state = {text: "", isNotEmpty: true}
  country = {text: "", isNotEmpty: true}

  constructor(private userService: UserService, private router: Router, private cookie: CookieService) {
    this.token = this.cookie.get('jwt')
    this.username = this.router.url.split('/')[1]
    userService.getPersonalDetail(this.username, { token: this.token }).subscribe(
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
    if (e.name === 'first_name') {
      if (!e.data) {
        this.first_name.isNotEmpty = false
      } else {
        this.first_name.text = e.data
        this.first_name.isNotEmpty = true
      }
    }
    if (e.name === 'last_name') {
      if (!e.data) {
        this.last_name.isNotEmpty = false
      } else {
        this.last_name.text = e.data
        this.last_name.isNotEmpty = true
      }
    }
    if (e.name === 'dob') {
      if (!e.data) {
        this.dob.isNotEmpty = false
      } else {
        this.dob.text = e.data
        this.dob.isNotEmpty = true
      }
    }
    if (e.name === 'address_line1') {
      if (!e.data) {
        this.address_line1.isNotEmpty = false
      } else {
        this.address_line1.text = e.data
        this.address_line1.isNotEmpty = true
      }
    }
    if (e.name === 'address_line2') {
      this.address_line2.text = e.data
    }
    if (e.name === 'city') {
      if (!e.data) {
        this.city.isNotEmpty = false
      } else {
        this.city.text = e.data
        this.city.isNotEmpty = true
      }
    }
    if (e.name === 'state') {
      if (!e.data) {
        this.state.isNotEmpty = false
      } else {
        this.state.text = e.data
        this.state.isNotEmpty = true
      }
    }
    if (e.name === 'country') {
      if (!e.data) {
        this.country.isNotEmpty = false
      } else {
        this.country.text = e.data
        this.country.isNotEmpty = true
      }
    }
  }

  editPersonalDetail() {
    if (this.first_name.isNotEmpty &&
        this.last_name.isNotEmpty &&
        this.dob.isNotEmpty &&
        this.address_line1.isNotEmpty &&
        this.city.isNotEmpty &&
        this.state.isNotEmpty &&
        this.country.isNotEmpty) {
          this.changedUserDetail.first_name = this.first_name.text
          this.changedUserDetail.last_name = this.last_name.text
          this.changedUserDetail.dob = this.dob.text
          this.changedUserDetail.address_line1 = this.address_line1.text
          this.changedUserDetail.city = this.city.text
          this.changedUserDetail.state = this.state.text
          this.changedUserDetail.country = this.country.text
          this.changedUserDetail.token = this.token
          console.log(this.changedUserDetail)
          this.userService.editPersonalDetail(this.changedUserDetail, this.username).subscribe(
            data => {
              console.log(data)
            },
            error => {
              console.log(error)
            }
          )
        } else {
          console.log(this.first_name, this.last_name, this.dob, this.address_line1, this.address_line2, this.city, this.state,this.country)
        }
  }

}
