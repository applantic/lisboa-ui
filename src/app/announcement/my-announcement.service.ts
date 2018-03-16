import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MyAnnouncement, NewMyAnnouncement} from './my-announcement.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MyAnnouncementService {
  public myAnnouncementSubject: BehaviorSubject<MyAnnouncement> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {
  }

  public updateAnnouncement(newMyAnnouncement: NewMyAnnouncement): Observable<MyAnnouncement> {
    return this.httpClient.put<MyAnnouncement>(`announcement`, newMyAnnouncement)
      .do((data) => console.log('updateAnnouncement: ', data));
  }

  public addMyNewAnnouncement(newMyAnnouncement: NewMyAnnouncement): Observable<MyAnnouncement> {
    return this.httpClient.post<MyAnnouncement>(`announcement`, newMyAnnouncement)
      .do((data) => console.log('addMyNewAnnouncement: ', data));
  }

  public getMyAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    return this.httpClient.get<any>(`myannouncement/${id}`)
      .do((data) => this.myAnnouncementSubject = data)
      .do((data) => console.log('getMyAnnouncementDetails: ', data));
  }

  public getMyAnnouncementList(): Observable<MyAnnouncement[]> {
    return this.httpClient.get<any>(`myannouncement?page=${0}&size=${10}&sort=createdDateTime,desc`)
      .map((data) => (data.content as MyAnnouncement[]))
      .do((data) => console.log('getMyAnnouncementList: ', data));
  }
}
