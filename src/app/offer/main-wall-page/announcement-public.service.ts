import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AnnouncementPublic} from './announcement-public.model';

@Injectable()
export class AnnouncementPublicService {

  constructor(private httpClient: HttpClient) {}

  getListAnnouncement(): Observable<AnnouncementPublic[]> {
    return this.httpClient.get<any>(`public/announcement?page=${0}&size=${10}&sort=createdDateTime,desc`)
      .map((data) => (data.content as AnnouncementPublic[]))
      .do((announcementPublic) => console.log('AnnouncementPublic[]: ', announcementPublic));
  }
}
