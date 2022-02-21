import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-track',
  templateUrl: './view-track.component.html',
  styleUrls: ['./view-track.component.css']
})
export class ViewTrackComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewTrackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close()
  }

}


