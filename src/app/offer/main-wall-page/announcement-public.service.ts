import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AnnouncementPublic} from './announcement-public.model';


@Injectable()
export class AnnouncementPublicService {
  public listAnnouncementSubject: BehaviorSubject<AnnouncementPublic[]> = new BehaviorSubject([]);
  public listAnnouncementLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  getListAnnouncement(): Observable<AnnouncementPublic[]> {
    this.listAnnouncementLoadedSubject.next(false);

    return this.httpClient.get<any>(`announcement?page=${0}&size=${10}`)
      .map((data) => data.content)
      .do((data) => this.listAnnouncementSubject.next(data))
      .do((data) => this.listAnnouncementLoadedSubject.next(true));
  }
}
