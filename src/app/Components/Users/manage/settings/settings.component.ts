import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { EventService } from 'src/app/services/event/event.service'
import { timezone } from 'src/app/constants';
import { User, SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  searchList: Array<User> = []
  hasQuery: Boolean = false

  emptyVariable = "None"
  timezones = timezone
  url = ""
  token = ""
  chairperson = ""
  chairpersons: Array<string> = []
  keyword = ""
  keywords: Array<string> = []

  homeBtn = 0
  scheduleBtn = 0
  locationBtn = 0
  chairpersonBtn = 0
  extraBtn = 0

  homeObj = {
    title: "",
    description: "",
    set: 0,
    token: ""
  }

  scheduleObj = {
    start_dt: "",
    end_dt: "",
    start_time: "",
    end_time: "",
    timezone: "",
    set: 1,
    token: ""
  }

  locationObj = {
    room_name: "",
    veneue_id: "",
    address: "",
    map_url: "",
    set: 2,
    token: ""
  }

  chairpersonObj = {
    chairpersons: [""],
    set: 3,
    token: ""
  }

  contactObj = {
    additional_info: "",
    email: "",
    phone: "",
    set: 4,
    token: ""
  }

  extraObj = {
    keyword: [""],
    e_type: "",
    set: 5,
    token: ""
  }

  constructor(
    private router: Router,
    private eventService: EventService,
    private cookie: CookieService,
    private searchService: SearchService) {
    this.url = this.router.url
    this.token = this.cookie.get('jwt')
    this.eventService.getManageEventDetail({ token: this.token }, this.url.split('/')[2]).subscribe(
      data => {
        this.fetchDataFromObj(data)
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

  addData(e: any) {
  }

  addKeyword(e: any) {
    this.keywords.push(e)
    this.keyword = ""
  }

  addChairperson(e: any) {
    this.chairpersons.push(e.name)
    this.chairpersonObj.chairpersons.push(e)
    this.hasQuery = false
    this.chairperson = ""
  }

  popName(i: any) {
    this.chairpersons.splice(i, 1)
    this.chairpersonObj.chairpersons.splice(i, 1)
    console.log(this.chairpersons, this.chairpersonObj)
  }

  sendData(e: any) {
    let query: string = e.target.value

    let matchSpaces: any = query.match(/\s*/)
    if (matchSpaces[0] === query) {
      this.searchList = []
      this.hasQuery = false
      return
    }

    this.searchService.searchUser(query.trim()).subscribe(results => {
      this.searchList = results
      console.log(this.searchList)
      this.hasQuery = true
    })
  }

  editBtn(e: String) {
    if (e == "home") this.homeBtn++
    else if (e == "schedule") this.scheduleBtn++
    else if (e == "location") this.locationBtn++
    else if (e == "chairperson") this.chairpersonBtn++
    else if (e == "extra") this.extraBtn++
  }

  submitBtn(e: any) {
    if (e == "home") {
      this.homeObj.token = this.token
      this.eventService.setManageEventDetail(this.homeObj, this.url.split('/')[2]).subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
      this.homeBtn++
    }
    else if (e == "schedule") {
      this.scheduleObj.token = this.token
      this.eventService.setManageEventDetail(this.scheduleObj, this.url.split('/')[2]).subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
      this.scheduleBtn++
    }
    else if (e == "location") {
      this.locationObj.token = this.token
      this.eventService.setManageEventDetail(this.locationObj, this.url.split('/')[2]).subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
      this.locationBtn++
    }
    else if (e == "chairperson") {
      this.chairpersonObj.token = this.token
      this.chairpersonObj.chairpersons = this.chairpersons
      this.eventService.setManageEventDetail(this.chairpersonObj, this.url.split('/')[2]).subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
      this.chairpersonBtn++
    }
    else if (e == "extra") {
      this.extraObj.token = this.token
      this.extraObj.keyword = this.keywords
      this.eventService.setManageEventDetail(this.extraObj, this.url.split('/')[2]).subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
      this.extraBtn++
    }
  }

  cancelBtn(e: any) {
    if (e == "home") this.homeBtn++
    else if (e == "schedule") this.scheduleBtn++
    else if (e == "location") this.locationBtn++
    else if (e == "chairperson") this.chairpersonBtn++
    else if (e == "extra") this.extraBtn++
  }

  fetchDataFromObj(data: any) {
    this.homeObj.title = data.title
    this.homeObj.description = data.description
    this.scheduleObj.start_time = data.start_time
    this.scheduleObj.end_time = data.end_time
    this.scheduleObj.timezone = data.timezone
    this.locationObj.room_name = data.room_name
    this.locationObj.veneue_id = data.veneue_id
    this.locationObj.address = data.address
    this.locationObj.map_url = data.map_url
    //this.chairpersonObj.chairpersons = data.chairperson
    this.contactObj.additional_info = data.additional_info
    this.contactObj.email = data.email
    this.contactObj.phone = data.phone
    this.extraObj.keyword = data.keyword
    this.extraObj.e_type = data.e_type
  }

}
