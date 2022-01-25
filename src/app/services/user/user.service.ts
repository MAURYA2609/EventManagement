import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqService: WebRequestService) { }

  getUserDetail(username: String) {
    return this.webReqService.get(`${username}`)
  }
  getPersonalDetail(username: String, token: Object) {
    return this.webReqService.post(`${username}/edit/personal`, token)
  }
  editPersonalDetail(personalObj: Object, username: String) {
    return this.webReqService.put(`${username}/edit/personal`, personalObj)
  }
  getAffiliationDetail(username: String, token: Object) {
    return this.webReqService.post(`${username}/edit/affiliation`, token)
  }
  editAffiliationDetail(affiliationObj: Object, username: String) {
    return this.webReqService.put(`${username}/edit/affiliation`, affiliationObj)
  }
  getCredentialDetail(username: String, token: Object) {
    return this.webReqService.post(`${username}/edit/credential`, token)
  }
  editCredentialDetail(credentialObj: Object, username: String) {
    return this.webReqService.put(`${username}/edit/credential`, credentialObj)
  }
  blockUser(username: String) {
    return this.webReqService.get(`${username}/edit/block`)
  }
}