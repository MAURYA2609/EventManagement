import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  constructor(private webReqService: WebRequestService) { }

  submitNewAbstract(event_id: String, formData: any) {
    return this.webReqService.post(`events/${event_id}/abstracts/submit`, formData)
  }
  viewAllAbstract(event_id: String, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/abstracts/list`, objToSend)
  }
  fetchAbstract(event_id: String, abstract_id: String, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/abstracts/${abstract_id}`, objToSend)
  }

  getAbstractLogs(event_id: String, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/logs`, objToSend)
  }

  getCallForAbstract(event_id: any, token: any) {
    return this.webReqService.post(`events/${event_id}/call-for-abstract/get`, token)
  }

  openCallForAbstract(event_id: String, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/call-for-abstract/open`, objToSend)
  }

  closeCallForAbstract(event_id: String, token: any) {
    return this.webReqService.post(`events/${event_id}/call-for-abstract/close`, token)
  }

  reopenCallForAbstract(event_id: String, token: any) {
    return this.webReqService.post(`events/${event_id}/call-for-abstract/reopen`, token)
  }

  rescheduleCallForAbstract(event_id: String, objToSend: any) {
    return this.webReqService.post(`events/${event_id}/call-for-abstract/reschedule`, objToSend)
  }
}
