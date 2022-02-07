import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

export interface User {
  _id: String,
  name: String,
  email: String
}

export interface Abstract {
  _id: String,
  name: String,
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  ROOT_URL = ""
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://127.0.0.1:3000/search"
  }

  searchUser(query: String) {
    return this.http.post<{payload: Array<User>}>(`${this.ROOT_URL}/user`, { payload: query }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(data => data.payload)
    )
  }

  searchAbstract(query: String) {
    return this.http.post<{payload: Array<Abstract>}>(`${this.ROOT_URL}/abstract`, { payload: query }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(data => data.payload)
    )
  }

  searchEvent(query: String) {
    return this.http.post<{payload: Array<Event>}>(`${this.ROOT_URL}/event`, { payload: query }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map(data => data.payload)
    )
  }
}
