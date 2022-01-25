import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.authService.verifyEmail({ token: this.route.snapshot.queryParams['token'] }).subscribe(
      res => {
        const data = this.getDataFromObj(res)
        this.cookie.set("jwt", data)
        this.router.navigate(['/'])
      },
      error => {
        console.log(error)
      }
    )
  }

  getDataFromObj(data: any) {
    if (data.token) return data.token
    else return data.text
  }
}
