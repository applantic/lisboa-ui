import { Injectable } from '@angular/core';
import { MyAnnouncement } from '../../main-wall/model/my-announcement';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

const NAME_DATA = 'lisboaUi';

@Injectable()
export class LocalStorageService {
  constructor() {}

  public set(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public initialize() {
    if (!localStorage.getItem(NAME_DATA)) {
      localStorage.setItem(NAME_DATA, '{}');
    }
  }

  public setAnnouncement(myAnnouncement: MyAnnouncement): Observable<MyAnnouncement> {
    const lisboaUiDate = this.getData();

    const newAnnouncementList = changeAnnouncement(lisboaUiDate.announcementList, myAnnouncement);

    localStorage.setItem(NAME_DATA, JSON.stringify(Object.assign({}, lisboaUiDate, { announcementList: newAnnouncementList })));

    return of(myAnnouncement);
  }

  private getData() {
    return JSON.parse(localStorage.getItem(NAME_DATA));
  }
}

function changeAnnouncement(announcementList: MyAnnouncementMap = {}, myAnnouncement: MyAnnouncement): MyAnnouncementMap {
  const newAnnouncementList = Object.assign({}, announcementList);

  if (announcementList[myAnnouncement.id]) {
    newAnnouncementList[myAnnouncement.id] = Object.assign({}, newAnnouncementList[myAnnouncement.id], myAnnouncement);
  } else {
    newAnnouncementList[myAnnouncement.id] = Object.assign({}, myAnnouncement);
  }

  return newAnnouncementList;
}

interface MyAnnouncementMap {
  [key: string]: MyAnnouncement;
}
