import {Component, OnInit} from '@angular/core';
import {MyAnnouncement} from '../../announcemenet/announcement.model';
import {OfferService} from '../offer.service';

@Component({
  selector: 'pt-main-wall-page',
  templateUrl: './main-wall-page.component.html',
  styleUrls: ['./main-wall-page.component.scss']
})
export class MainWallPageComponent implements OnInit {
  public announcements: MyAnnouncement[] = [];
  public loaded = false;

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offerService.getListAnnouncement()
      .do((announcement) => console.log(announcement))
      .subscribe((announcements) => this.announcements = announcements);

    this.offerService.listAnnouncementLoadedSubject
      .do((loaded) => console.log('loaded: ', loaded))
      .subscribe((loaded) => this.loaded = loaded);
  }

}
