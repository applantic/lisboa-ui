import {Component, OnInit} from '@angular/core';
import {MyAnnouncement} from '../../announcemenet/announcement.model';
import {OfferService} from '../offer.service';

@Component({
  selector: 'pt-offer-list-page',
  templateUrl: './offer-list-page.component.html',
  styleUrls: ['./offer-list-page.component.scss']
})
export class OfferListPageComponent implements OnInit {
  public announcements: MyAnnouncement[] = [];
  public loaded = false;

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offerService.getListAnnouncement()
      .do((a) => console.log(a))
      .subscribe((announcements) => this.announcements = announcements);

    this.offerService.listAnnouncementLoadedSubject
      .do((loaded) => console.log('loaded: ', loaded))
      .subscribe((loaded) => this.loaded = loaded);
  }

}
