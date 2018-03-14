import { of } from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {Offer} from './offer.model';
import {MyAnnouncement} from '../announcmenet/announcement.model';

@Injectable()
export class OfferService {
  public listAnnouncementSubject: BehaviorSubject<MyAnnouncement[]> = new BehaviorSubject([]);
  public listAnnouncementLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  addOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.post<Offer>('offer', offer);
  }

  getListAnnouncement(): Observable<MyAnnouncement[]> {
    this.listAnnouncementLoadedSubject.next(false);

    return this.httpClient.get<any>(`announcement?page=${0}&size=${10}`)
      .map((data) => data.content)
      .do((data) => this.listAnnouncementSubject.next(data))
      .do((data) => this.listAnnouncementLoadedSubject.next(true));
  }

  getAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    // return this.dataService.getAnnouncementDetails(id)
    //   .do((data) => console.log('getAnnouncementDetails: ', data));

    return this.listAnnouncementSubject
      .switchMap((announcementList) => {
        const announcement = announcementList.find((el) => el.id === id);
        if (announcement) {
          return of(announcement);
        } else {
          return this.getListAnnouncement()
            .map((data) => data.find((el) => el.id === id));
        }
      });
  }
}
