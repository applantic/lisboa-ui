import {HttpClient} from '@angular/common/http';
import {Offer} from './offer';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class OfferService {
  constructor(private httpClient: HttpClient) {}

  addOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.post<Offer>('offer', offer);
  }
}
