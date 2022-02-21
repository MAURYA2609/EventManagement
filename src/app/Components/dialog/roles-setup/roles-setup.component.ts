import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { colors } from 'src/app/constants';

@Component({
  selector: 'app-roles-setup',
  templateUrl: './roles-setup.component.html',
  styleUrls: ['./roles-setup.component.css']
})
export class RolesSetupComponent implements OnInit {

  colors = colors
  role_color: any
  name = ""
  code = ""
  showError = {
    name: false,
    code: false,
    color: false,
    length: false
  }

  constructor(
    private dialogRef: MatDialogRef<RolesSetupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.name = data.name
      this.code = data.code
      this.role_color = data.color
  }

  ngOnInit(): void {
  }

  onSubmit(name: any, code: any, color: any) {
    if (name.value && code.value && color)
      this.dialogRef.close({ name: name.value, code: code.value, color: color })
    else {
      if (!name.value) this.showError.name = true
      else this.showError.name = false
      if (!code.value) this.showError.code = true
      else this.showError.code = false
      if (code.value.length < 5) this.showError.length = true
      else this.showError.length = false
      if (!color) this.showError.color = true
      else this.showError.color = false
    }
  }

  onClose() {
    this.dialogRef.close({ name: "", code: "", color: "" })
  }

}
