import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AnnouncementPublic} from './announcement-public.model';
import {AnnouncementPublicService} from './announcement-public.service';

@Component({
  selector: 'pt-main-wall-page',
  templateUrl: './main-wall-page.component.html',
  styleUrls: ['./main-wall-page.component.scss']
})
export class MainWallPageComponent implements OnInit {
  public announcements: AnnouncementPublic[] = [];
  public loaded = false;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private announcementPublicService: AnnouncementPublicService) {}

  ngOnInit() {
    this.announcementPublicService.getListAnnouncement()
      .do((announcement) => this.loaded = true)
      .subscribe((announcements) => this.announcements = announcements);
  }
}
