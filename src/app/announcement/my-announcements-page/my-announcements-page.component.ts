import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'pt-my-announcements-page',
  templateUrl: './my-announcements-page.component.html',
  styleUrls: ['./my-announcements-page.component.scss']
})
export class MyAnnouncementsPageComponent implements OnInit {
  public announcements = [];
  public loaded = false;
  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.announcementService.getMyAnnouncements()
      .do(() => this.loaded = true)
      .subscribe((announcements) => this.announcements = announcements.content);
  }
}
