import 'rxjs/add/operator/do';
import 'rxjs/add/observable/forkJoin';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {MyAnnouncement} from '../model/my-announcement';
import {DataService} from '../../core/services/data.service';

@Injectable()
export class MyAnnouncementService {
  private listAnnouncement: MyAnnouncement[];

  public listAnnouncementSubject: Subject<MyAnnouncement[]> = new Subject();

  constructor(private dataService: DataService) {
  }

  getListAnnouncement() {
    this.dataService.getListAnnouncement(0, 10)
      .do((data) => this.listAnnouncement = data)
      .do((data) => this.listAnnouncementSubject.next(data))
      .do((data) => console.log('getListAnnouncement: ', data))
      .subscribe((data) => {});
  }

  addNewAnnouncement(myAnnouncement: MyAnnouncement): Observable<MyAnnouncement> {
    return this.dataService.addNewAnnouncement(myAnnouncement)
      .do((data) => console.log('addNewAnnouncement: ', data));
  }
}
