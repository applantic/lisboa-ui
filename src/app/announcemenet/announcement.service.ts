import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Announcement, NewAnnouncement} from './announcement.model';
import {HttpClient} from '@angular/common/http';
import {PublicAnnouncementDetail} from '../offer/make-offer-page/offer.model';

@Injectable()
export class AnnouncementService {

  constructor(private httpClient: HttpClient) {
  }

  addNewAnnouncement(newAnnouncement: NewAnnouncement): Observable<Announcement> {
    return this.httpClient.post<Announcement>(`announcement`, newAnnouncement)
      .do((data) => console.log('addNewAnnouncement: ', data));
  }

  getAnnouncementDetails(id: string): Observable<Announcement> {
    return this.httpClient.get<any>(`announcement/${id}`)
      .do((data) => console.log('getAnnouncementDetails: ', data));
  }
}
