import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private webReqService: WebRequestService) { }

  createEvent(eventDetailObj: Object) {
    return this.webReqService.post('events/create', eventDetailObj)
  }

  fetchAllEvent() {
    return this.webReqService.get('events/list')
  }

  getEventDetails(event_id: any) {
    return this.webReqService.get(`events/${event_id}`)
  }

  getEventManageBase(token: any, event_id: any) {
    return this.webReqService.post(`events/${event_id}/manage`, token)
  }

  getManageEventDetail(token: any, event_id: any) {
    return this.webReqService.post(`events/${event_id}/detail/get`, token)
  }

  setManageEventDetail(objToSend: any, event_id: any) {
    return this.webReqService.post(`events/${event_id}/detail/set`, objToSend)
  }

  getEventMaterial(token: any, event_id: any) {
    return this.webReqService.post(`events/${event_id}/manage/material/get`, token)
  }

  setEventMaterial(event_id: any, formData: any) {
    return this.webReqService.post(`events/${event_id}/manage/material/set`, formData)
  }

  viewEventMaterial(event_id: any, uuid: any, token: any) {
    return this.webReqService.post(`events/${event_id}/manage/material/${uuid}`, token)
  }

  getEventPermission(event_id: any, token: any) {
    return this.webReqService.post(`events/${event_id}/permission/get`, token)
  }

  setEventPermission(event_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/permission/set`, objToSend)
  }

  setUpdatePermission(event_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/permission/update`, objToSend)
  }

  roleSetup(event_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/manage/roles-setup/set`, objToSend)
  }

  roleList(event_id: any, token: any) {
    return this.webReqService.post(`events/${event_id}/manage/roles-setup/get`, token)
  }

  rolesUpdate(event_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/manage/roles-setup/update`, objToSend)
  }

  rolesDelete(event_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/manage/roles-setup/delete`, objToSend)
  }

  setMember(event_id: any, role_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/manage/${role_id}/member/set`, objToSend)
  }

  getMembersList(event_id: any, role_id: any, token: any) {
    return this.webReqService.post(`events/${event_id}/manage/${role_id}/member/get`, token)
  }

  deleteMember(event_id: any, role_id: any, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/manage/${role_id}/member/delete`, objToSend)
  }

}
