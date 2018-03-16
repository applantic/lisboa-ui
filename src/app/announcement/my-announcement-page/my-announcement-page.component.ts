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
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public clickEdit() {
    this.myAnnouncementService.clickedEditAction(this.myAnnouncement.id);
  }
}
