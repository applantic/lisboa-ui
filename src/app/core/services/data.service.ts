import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/observable';

import {MyAnnouncement} from '../../main-wall/model/my-announcement';
import {Category} from '../../config';
import {HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public getListAnnouncement(page: number, size: number): Observable<MyAnnouncement[]> {
    return this.http.get<any>(`announcement?page=${page}&size=${size}`)
      .map((data) => data.content);
  }

  public addNewAnnouncement(myAnnouncement: MyAnnouncement): Observable<MyAnnouncement> {
    const {
      id,
      createData,
      lastUpdated,
      period,
      ...payload
    } = myAnnouncement;

    return this.http.post<MyAnnouncement>(`announcement`, payload);
  }

  public getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`category`);
  }

  public getAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    return of(({} as MyAnnouncement));
  }
}

