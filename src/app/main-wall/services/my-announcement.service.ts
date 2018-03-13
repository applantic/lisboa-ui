import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MyAnnouncement} from '../model/my-announcement';
import {DataService} from '../../core/services/data.service';

@Injectable()
export class MyAnnouncementService {
  public listAnnouncementSubject: BehaviorSubject<MyAnnouncement[]> = new BehaviorSubject([]);
  public listAnnouncementLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private dataService: DataService) {
  }

  getListAnnouncement(): Observable<MyAnnouncement[]> {
    this.listAnnouncementLoadedSubject.next(false);

    return this.dataService.getListAnnouncement(0, 10)
      .do((data) => this.listAnnouncementSubject.next(data))
      .do((data) => this.listAnnouncementLoadedSubject.next(true));
  }

  addNewAnnouncement(myAnnouncement: MyAnnouncement): Observable<MyAnnouncement> {
    return this.dataService.addNewAnnouncement(myAnnouncement)
      .do((data) => console.log('addNewAnnouncement: ', data));
  }

  getAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    // return this.dataService.getAnnouncementDetails(id)
    //   .do((data) => console.log('getAnnouncementDetails: ', data));

    return this.listAnnouncementSubject
      .switchMap((announcementList) => {
        const announcement = announcementList.find((el) => el.id === id);
        if (announcement) {
          return of(announcement);
        } else {
          return this.getListAnnouncement()
            .map((data) => data.find((el) => el.id === id));
        }
      });
  }

}
