import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyAnnouncementService} from '../../services/my-announcement.service';
import {DeliveryEnum, MyAnnouncement} from '../../model/my-announcement';

@Component({
  selector: 'pt-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit {
  public announcement: MyAnnouncement;
  public deliveryOptions = DeliveryEnum;

  public makeAnOfferFlag = false;

  constructor(private route: ActivatedRoute,
              private myAnnouncementService: MyAnnouncementService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.myAnnouncementService.getAnnouncementDetails(id)
      .do((announcement) => console.log('announcement: ', announcement))
      .subscribe((announcement) => this.announcement = announcement);
  }

  clickedMakeAnOffer() {
    this.makeAnOfferFlag = !this.makeAnOfferFlag;
  }

  submitOffer() {
    console.log('submitOffer (!)');
  }
}
