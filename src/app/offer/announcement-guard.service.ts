import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {OfferService} from './make-offer-page/offer.service';



@Injectable()
export class AnnouncementGuardService implements CanActivate {
  constructor(private router: Router,
              private offerService: OfferService) {
  }

  getAnnouncementData(id: string): Observable<boolean> {
    console.log('getAnnouncementData: ', id);

    return this.offerService
      .getAnnouncementDetails(id)
      .map(() => true)
      .catch((error) => {
        this.router.navigate(['/ogloszenia']);
        return of(false);
      });
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.getAnnouncementData(route.params['id']);
  }
}
