import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/observable';

import {MyAnnouncement} from '../../main-wall/model/my-announcement';
import {Category} from '../../config';


@Injectable()
export class DataService {

  constructor() {

  }

  public getListAnnouncement(): Observable<MyAnnouncement[]> {
    return of([]);
  }
  
  public getCategoryList(): Observable<Category[]> {
    return of([]);
  }
}
