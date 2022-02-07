import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {

  userPermissionObj = {
    fullname: "Indico Admin",
    email: "vkpatel@ipr.res.in",
    permission: "write"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
