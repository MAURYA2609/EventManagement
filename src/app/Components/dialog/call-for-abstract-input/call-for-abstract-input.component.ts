import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { timezone } from 'src/app/constants';

@Component({
  selector: 'app-call-for-abstract-input',
  templateUrl: './call-for-abstract-input.component.html',
  styleUrls: ['./call-for-abstract-input.component.css']
})
export class CallForAbstractInputComponent implements OnInit {

  timezones = timezone
  timezone: any
  end_dt: any

  constructor(private dialogRef: MatDialogRef<CallForAbstractInputComponent>) {}

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close({ end_dt: "", timezone: "" })
  }

  onSubmit(end_dt: any, timezone: any) {
    this.dialogRef.close({ end_dt: end_dt, timezone: timezone })
  }
}
