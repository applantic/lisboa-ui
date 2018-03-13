import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {MyAnnouncementService} from './my-announcement.service';

@Injectable()
export class AnnouncementGuardService implements CanActivate {
  constructor(private router: Router,
              private myAnnouncementService: MyAnnouncementService) {
  }

  getAnnouncementData(id: string): Observable<boolean> {
    console.log('getAnnouncementData: ', id);

    return this.myAnnouncementService
      .getAnnouncementDetails(id)
      .map(() => true)
      .catch((error) => of(false));
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.getAnnouncementData(route.params['id']);
  }
}
