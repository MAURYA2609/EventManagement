import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SearchService, User } from 'src/app/services/search/search.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {

  author = false
  coauthor = false

  user: any

  searchList: Array<User> = []
  hasQuery: Boolean = false

  constructor(private dialogRef: MatDialogRef<SearchAuthorComponent>, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  addAuthor(e: any, type: any) {
    if (type) this.author = e
    else this.coauthor = e
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

  addAuthorName(e: any) {
    this.user = e
    this.hasQuery = false

  }

  onSubmit() {
    this.dialogRef.close({ user: this.user, author: this.author, coauthor: this.coauthor })
  }

  onClose() {
    this.dialogRef.close()
  }
}
