import 'rxjs/add/operator/takeUntil';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AnnouncementPublic} from './announcement-public.model';
import {AnnouncementPublicService} from './announcement-public.service';

@Component({
  selector: 'pt-main-wall-page',
  templateUrl: './main-wall-page.component.html',
  styleUrls: ['./main-wall-page.component.scss']
})
export class MainWallPageComponent implements OnInit, OnDestroy {
  public announcements: AnnouncementPublic[] = [];
  public loaded = false;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private announcementPublicService: AnnouncementPublicService) {}

  ngOnInit() {
    this.announcementPublicService.getListAnnouncement()
      .takeUntil(this.ngUnsubscribe)
      .do((announcement) => console.log(announcement))
      .subscribe((announcements) => this.announcements = announcements);

    this.announcementPublicService.listAnnouncementLoadedSubject
      .takeUntil(this.ngUnsubscribe)
      .do((loaded) => console.log('loaded: ', loaded))
      .subscribe((loaded) => this.loaded = loaded);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
