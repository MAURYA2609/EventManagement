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
    return this.webReqService.post('user/'+`${username}/edit/personal`, token)
  }
  editPersonalDetail(personalObj: Object, username: String) {
    return this.webReqService.put('user/'+`${username}/edit/personal`, personalObj)
  }
  getAffiliationDetail(username: String, token: Object) {
    return this.webReqService.post('user/'+`${username}/edit/affiliation`, token)
  }
  editAffiliationDetail(affiliationObj: Object, username: String) {
    return this.webReqService.put('user/'+`${username}/edit/affiliation`, affiliationObj)
  }
  getCredentialDetail(username: String, token: Object) {
    return this.webReqService.post('user/'+`${username}/edit/credential`, token)
  }
  editCredentialDetail(credentialObj: Object, username: String) {
    console.log('called here')
    return this.webReqService.put('user/'+`${username}/edit/credential`, credentialObj)
  }
  blockUser(username: String) {
    return this.webReqService.get(`${username}/edit/block`)
  }
}