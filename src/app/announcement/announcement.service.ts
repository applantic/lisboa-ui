import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MyAnnouncement, NewAnnouncement} from './announcement.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AnnouncementService {

  constructor(private httpClient: HttpClient) {
  }

  addNewAnnouncement(newAnnouncement: NewAnnouncement): Observable<MyAnnouncement> {
    return this.httpClient.post<MyAnnouncement>('announcement', newAnnouncement)
      .do((data) => console.log('addNewAnnouncement: ', data));
  }

  getAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    return this.httpClient.get<any>(`myannouncement/${id}`)
      .do((data) => console.log('getAnnouncementDetails: ', data));
  }

  getMyAnnouncements(): Observable<any> {
    return this.httpClient.get<any>(`myannouncement?page=${0}&size=${10}&sort=createdDateTime,desc`)
      .do((data) => console.log('getMyAnnouncements: ', data));
  }
}
