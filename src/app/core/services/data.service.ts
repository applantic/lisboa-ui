import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/observable';

import {MyAnnouncement} from '../../main-wall/model/my-announcement';
import {Category, BASE_URL} from '../../config';
import {HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {
  option:Option;

  constructor(private http:HttpClient) {
    this.option = {
      headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
    }
  }

  public getListAnnouncement():Observable<MyAnnouncement[]> {
    return of([]);
  }

  public addNewAnnouncement(myAnnouncement:MyAnnouncement) :Observable<MyAnnouncement> {
    const {
      id,
      createData,
      lastUpdated,
      period,
      ...payload
    } = myAnnouncement;

    return this.http.post<MyAnnouncement>(`${BASE_URL}announcement`, payload, this.option)
  }

  public getCategoryList():Observable<Category[]> {
    return this.http.get<Category[]>(`${BASE_URL}category`, this.option)
  }
}

interface Option {
  headers?:HttpHeaders | {
    [header:string]:string | string[];
  };
}
