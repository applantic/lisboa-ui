import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';

import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {MyAnnouncementService} from './my-announcement.service';

@Injectable()
export class AnnouncementGuardService implements CanActivate {
  constructor(private router: Router,
              private myAnnouncementService: MyAnnouncementService) {
  }

  getMyAnnouncementDetails(id: string): Observable<boolean> {
    if (this.myAnnouncementService.myAnnouncementSubject.value &&
      this.myAnnouncementService.myAnnouncementSubject.value .id === id) {
      return of(true);
    }

    return this.myAnnouncementService
      .getMyAnnouncementDetails(id)
      .map(() => true)
      .catch((error) => {
        this.router.navigate(['/tablica']);
        return of(false);
      });
  }


  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.getMyAnnouncementDetails(route.params.id);
  }
}
