import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CallForAbstractInputComponent } from '../call-for-abstract-input/call-for-abstract-input.component';

@Component({
  selector: 'app-author-type-selector',
  templateUrl: './author-type-selector.component.html',
  styleUrls: ['./author-type-selector.component.css']
})
export class AuthorTypeSelectorComponent implements OnInit {

  author = false
  coauthor = false

  constructor(private dialogRef: MatDialogRef<CallForAbstractInputComponent>) { }

  ngOnInit(): void {
  }

  addAuthor(e: any, type: any) {
    if (type) this.author = e
    else this.coauthor = e
  }

  onSubmit() {
    this.dialogRef.close({ author: this.author, coauthor: this.coauthor })
  }

  onClose() {
    this.dialogRef.close()
  }


}
