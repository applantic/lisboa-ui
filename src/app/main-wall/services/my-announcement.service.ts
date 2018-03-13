import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {MyAnnouncement} from '../model/my-announcement';
import {DataService} from '../../core/services/data.service';

@Injectable()
export class MyAnnouncementService {
  public listAnnouncementSubject: BehaviorSubject<MyAnnouncement[]> = new BehaviorSubject([]);
  public listAnnouncementLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private dataService: DataService) {
  }

  getListAnnouncement() {
    this.listAnnouncementLoadedSubject.next(false);

    this.dataService.getListAnnouncement(0, 10)
      .do((data) => this.listAnnouncementSubject.next(data))
      .subscribe((data) => {
        this.listAnnouncementLoadedSubject.next(true);
      });
  }

  addNewAnnouncement(myAnnouncement: MyAnnouncement): Observable<MyAnnouncement> {
    return this.dataService.addNewAnnouncement(myAnnouncement)
      .do((data) => console.log('addNewAnnouncement: ', data));
  }

  getAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    // return this.dataService.getAnnouncementDetails(id)
    //   .do((data) => console.log('getAnnouncementDetails: ', data));

    return this.listAnnouncementSubject
      .map((data) => data.find((el) => el.id === id));
  }

}
