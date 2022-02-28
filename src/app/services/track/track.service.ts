import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private webRequestService: WebRequestService) { }

  createNewTrack(eid: any, objToSend: any) {
    return this.webRequestService.post(`events/${ eid }/tracks/create`, objToSend)
  }

  trackList(event_id: any, token: any) {
    return this.webRequestService.post(`events/${ event_id }/tracks/list`, token)
  }

  trackDetail(event_id: any, track_id: any, token: any) {
    return this.webRequestService.post(`events/${ event_id }/tracks/${ track_id }/view`, token)
  }

  updateTrackDetail(event_id: any, track_id: any, objToSend: any) {
    return this.webRequestService.put(`events/${ event_id }/tracks/${ track_id }/update`, objToSend)
  }

  deleteTrack(event_id: any, track_id: any, token: any) {
    return this.webRequestService.delete(`events/${ event_id }/tracks/${ track_id }/delete`)
  }
}
