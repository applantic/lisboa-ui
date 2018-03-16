import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MyAnnouncement, NewMyAnnouncement} from './my-announcement.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MyAnnouncementService {
  public myAnnouncementSubject: BehaviorSubject<MyAnnouncement> = new BehaviorSubject(null);

  constructor(private router: Router,
              private httpClient: HttpClient) {
  }

  public clickedEditAction(id: string) {
    this.router.navigate([`/ogloszenia/edytuj`, id]);
  }

  public clickedSaveAction(newMyAnnouncement: NewMyAnnouncement) {
    this.addMyNewAnnouncement(newMyAnnouncement)
      .do((data) => this.router.navigate([`/ogloszenia/dodano`, data.id]))
      .subscribe();
  }

  public clickedUpdateAction(newAnnouncement: NewMyAnnouncement) {
    this.updateAnnouncement(newAnnouncement)
      .do((data) => this.router.navigate([`/ogloszenia`, data.id]))
      .subscribe();
  }

  public updateAnnouncement(newMyAnnouncement: NewMyAnnouncement): Observable<MyAnnouncement> {
    const {period, productKey, deliveryDate, ...rest} = newMyAnnouncement;
    const {version, id, ownerId} = this.myAnnouncementSubject.value;
    const myAnnouncement = Object.assign({}, {version, id, ownerId}, rest);

    return this.httpClient.put<MyAnnouncement>(`myAnnouncement`, myAnnouncement)
      .do((data) => this.myAnnouncementSubject.next(data))
      .do((data) => console.log('updateAnnouncement: ', data));
  }

  public addMyNewAnnouncement(newMyAnnouncement: NewMyAnnouncement): Observable<MyAnnouncement> {
    return this.httpClient.post<MyAnnouncement>(`myAnnouncement`, newMyAnnouncement)
      .do((data) => console.log('addMyNewAnnouncement: ', data));
  }

  public getMyAnnouncementDetails(id: string): Observable<MyAnnouncement> {
    return this.httpClient.get<any>(`myannouncement/${id}`)
      .do((data) => this.myAnnouncementSubject.next(data))
      .do((data) => console.log('getMyAnnouncementDetails: ', data));
  }

  public getMyAnnouncementList(): Observable<MyAnnouncement[]> {
    return this.httpClient.get<any>(`myannouncement?page=${0}&size=${10}&sort=createdDateTime,desc`)
      .map((data) => (data.content as MyAnnouncement[]))
      .do((data) => console.log('getMyAnnouncementList: ', data));
  }
}