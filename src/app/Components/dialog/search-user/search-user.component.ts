import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SearchService, User } from 'src/app/services/search/search.service';
import { SearchAuthorComponent } from '../search-author/search-author.component';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  user: any

  searchList: Array<User> = []
  hasQuery: Boolean = false

  constructor(
    private dialogRef: MatDialogRef<SearchAuthorComponent>,
    private searchService: SearchService
    ) { }

  ngOnInit(): void {
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
      this.hasQuery = true
    })
  }

  addUser(e: any) {
    this.user = e
    this.hasQuery = false
  }

  onSubmit() {
    this.dialogRef.close(this.user)
  }

  onClose() {
    this.dialogRef.close()
  }

}
