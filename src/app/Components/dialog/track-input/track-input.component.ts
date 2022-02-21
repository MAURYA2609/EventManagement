import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewTrackComponent } from '../view-track/view-track.component';

@Component({
  selector: 'app-track-input',
  templateUrl: './track-input.component.html',
  styleUrls: ['./track-input.component.css']
})
export class TrackInputComponent implements OnInit {

  track_description: any

  constructor(
    private dialogRef: MatDialogRef<ViewTrackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.track_description = data.description
  }

  ngOnInit(): void {
  }

  onSubmit(track_name: string, track_code: string, track_description: string) {
    this.dialogRef.close({ title: track_name, code: track_code, description: track_description })
  }

  onClose() {
    this.dialogRef.close()
  }

}
