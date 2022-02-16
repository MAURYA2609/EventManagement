import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoginRequired: boolean = true
  changeHeaderWidth: boolean = false
  url: any
  isOpened = false

  user_name = ""
  login = false

  public screenWidth: any

  constructor(private router: Router, private cookie: CookieService) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url = e.url.split('/').pop()
        if (this.url === "login") {
          this.isLoginRequired = false
        } else if (this.url === "register") {
          this.isLoginRequired = false
        } else if (this.url === "forgot-password") {
          this.isLoginRequired = false
        } else {
          this.isLoginRequired = true
        }
        if (this.url == "submit-abstract" || this.url == "create-event") {
          if (this.screenWidth < 600) {
            this.changeHeaderWidth = true
          } else {
            this.changeHeaderWidth = false
          }
        }
      }
    })
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
    const data = this.cookie.get("jwt")
    if (data) {
      const user = JSON.parse(atob(data.split('.')[1]))
      console.log(user)
      this.user_name = `${user.username}`
      this.login = !this.login
    } else {
      this.login = false
    }
  }

  toggleHover() {
    if (this.isOpened) {
      setTimeout(() => {
        this.isOpened = !this.isOpened
      }, 500)
    } else this.isOpened = !this.isOpened
  }

  checkAdmin()
  {

  }

  logout() {
    this.cookie.delete("jwt")
    this.login = !this.login
    this.user_name = ""
    this.router.navigate(['/'])
  }

  redirectToMainPage() {
    this.router.navigate(['/'])
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = window.innerWidth
    if (this.url == "submit-abstract" || this.url == "create-event") {
      if (this.screenWidth < 600) {
        this.changeHeaderWidth = true
      } else {
        this.changeHeaderWidth = false
      }
    }
  }
}
