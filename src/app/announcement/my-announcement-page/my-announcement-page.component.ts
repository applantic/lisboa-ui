import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MyAnnouncementService} from '../my-announcement.service';
import {MyAnnouncement} from '../my-announcement.model';
import {CircleIconTitleItem} from '../../shared/components/circle-icon-title/circle-icon-title.component';
import {DELIVERY_CIRCLE_TITLE_CONFIG, DeliveryEnum} from '../../dictionary/delivery.model';


@Component({
  selector: 'pt-my-announcement-page',
  templateUrl: './my-announcement-page.component.html',
  styleUrls: ['./my-announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit, OnDestroy {
  public myAnnouncement: MyAnnouncement;
  public deliveryOptions = DeliveryEnum;
  public acceptedOfferStateOptions = AcceptedOfferStateEnum;

  public circleShapeTitleConfig: CircleIconTitleItem[] = DELIVERY_CIRCLE_TITLE_CONFIG;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private myAnnouncementService: MyAnnouncementService) {
  }

  ngOnInit() {
    this.myAnnouncementService.myAnnouncementSubject
      .takeUntil(this.ngUnsubscribe)
      .do((myAnnouncement) => console.log('myAnnouncement: ', myAnnouncement))
      .subscribe((myAnnouncement) => this.myAnnouncement = myAnnouncement);
      .map((announcement) => extendOffersAnnouncement(announcement))
      .do((announcement) => console.log('announcement: ', announcement))
      .subscribe((announcement) => this.announcement = announcement);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public clickEdit() {
    this.myAnnouncementService.clickedEditAction(this.myAnnouncement.id);
  }

  public acceptOffer(id: string) {
    this.announcement.offers = this.announcement.offers.map((el) => {
      if (el.id === id) {
        el.acceptFlag = AcceptedOfferStateEnum.ACCEPTED;
      }

      return el;
    });
  }

  public discardOffer(id: string) {
    console.log('discardOffer: ', id);
    this.announcement.offers = this.announcement.offers.filter((el) => el.id !== id);
  }

  public clickEnvelopeMessage() {
    console.log('clickEnvelopeMessage: ');
  }
}

function extendOffersAnnouncement(myAnnouncement: MyAnnouncement): MyAnnouncement {
  const newOffers = myAnnouncement.offers
    .map((el) => ({...el, ...{deliveryType: randomValueFromArray<DeliveryEnum>([DeliveryEnum.BOTH_DELIVERIES, DeliveryEnum.WITH_DELIVERY, DeliveryEnum.WITHOUT_DELIVERY])}}))
    .map((el) => ({...el, ...{acceptFlag: randomValueFromArray<AcceptedOfferStateEnum>([AcceptedOfferStateEnum.DISCARD, AcceptedOfferStateEnum.ACCEPTED, AcceptedOfferStateEnum.ACCEPTED, AcceptedOfferStateEnum.INITIAL, AcceptedOfferStateEnum.INITIAL, AcceptedOfferStateEnum.INITIAL])}}))
    .filter((el) => el.acceptFlag !== AcceptedOfferStateEnum.DISCARD)
    .map((el) => {
      if (el.acceptFlag === AcceptedOfferStateEnum.ACCEPTED) {
        return {...el, ...{hasBadge: Math.random() >= 0.5}};
      }
      return el;
    });
  return {...myAnnouncement, ...{offers: newOffers}};
}

export enum AcceptedOfferStateEnum {
  ACCEPTED = 'ACCEPTED',
  DISCARD = 'DISCARD',
  INITIAL = 'INITIAL',
}

function randomValueFromArray<T>(myArray): T {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
