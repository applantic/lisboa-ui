import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/observable';

import {MyAnnouncement} from '../../main-wall/model/my-announcement';
import {Category} from '../../config';
import {HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {
  option: Option;

  constructor(private http: HttpClient) {
    this.option = {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    };
  }

  public getListAnnouncement(page: number, size: number): Observable<MyAnnouncement[]> {
    return this.http.get<any>(`/announcement?page=${page}&size=${size}`, this.option)
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

    return this.http.post<MyAnnouncement>(`/announcement`, payload, this.option);
  }

  public getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`/category`, this.option);
  }

  public getAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    return of(({} as MyAnnouncement));
  }
}

interface Option {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
}
