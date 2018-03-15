import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Offer, PublicAnnouncementDetail} from './offer.model';



@Injectable()
export class OfferService {

  constructor(private httpClient: HttpClient) {}

  makeOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.post<Offer>('offer', offer);
  }

  getAnnouncementDetails(id: string): Observable<PublicAnnouncementDetail> {
    return this.httpClient.get<PublicAnnouncementDetail>(`announcement/${id}`)
      .do((data) => console.log('getAnnouncementDetails: ', data));
  }

  findMyOffer(announcementId: string): Observable<Offer> {
    return this.httpClient.get<Offer>(`offer/my?announcementId=${announcementId}`)
      .do((data) => console.log('my offer is: ', data));
  }

}
