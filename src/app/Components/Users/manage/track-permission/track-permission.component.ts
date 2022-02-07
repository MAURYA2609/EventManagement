import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-permission',
  templateUrl: './track-permission.component.html',
  styleUrls: ['./track-permission.component.css']
})
export class TrackPermissionComponent implements OnInit {

  userPermissionObj = {
    fullname: "Indico Admin",
    email: "vkpatel@ipr.res.in",
    permission: "full"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
