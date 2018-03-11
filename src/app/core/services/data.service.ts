import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Rx';

import {MyAnnouncement} from '../../main-wall/model/my-announcement';

@Injectable()
export class DataService {

  constructor() {
    
  }
  
  public getListAnnouncement(): Observable<MyAnnouncement[]>{
    return of([])
  }
}
