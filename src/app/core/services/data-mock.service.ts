import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

import {LocalStorageService} from './local-storage.service';

import {Category} from '../../config';

import {MyAnnouncement} from '../../main-wall/model/my-announcement';

@Injectable()
export class DataMockService {

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
    this.localStorageService.initializeLocalStorage();
  }

  public getListAnnouncement(): Observable<MyAnnouncement[]> {
    return this.http.get<MyAnnouncement[]>('/data/my-announcement.json');
  }

  public getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>('/data/categories.json');
  }

}
