import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { MyAnnouncement } from '../model/my-announcement';
import { DataService } from '../../core/services/data.service';

@Injectable()
export class MyAnnouncementService {

  constructor(private dataService: DataService) {
  }

  getListAnnouncement(): Observable<MyAnnouncement[]> {
    return this.dataService.getListAnnouncement()
      .do((data) => console.log('getListAnnouncement: ', data));
  }
}
