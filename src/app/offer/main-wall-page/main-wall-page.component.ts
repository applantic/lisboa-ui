import {Component, OnInit} from '@angular/core';
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

  constructor(private announcementPublicService: AnnouncementPublicService) {}

  ngOnInit() {
    this.announcementPublicService.getListAnnouncement()
      .do((announcement) => console.log(announcement))
      .subscribe((announcements) => this.announcements = announcements);

    this.announcementPublicService.listAnnouncementLoadedSubject
      .do((loaded) => console.log('loaded: ', loaded))
      .subscribe((loaded) => this.loaded = loaded);
  }

}
