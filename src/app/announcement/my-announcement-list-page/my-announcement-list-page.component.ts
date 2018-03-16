import { Component, OnInit } from '@angular/core';
import { MyAnnouncementService } from '../my-announcement.service';

@Component({
  selector: 'pt-my-announcement-list-page',
  templateUrl: './my-announcement-list-page.component.html',
  styleUrls: ['./my-announcement-list-page.component.scss']
})
export class MyAnnouncementListPageComponent implements OnInit {
  public myAnnouncementList = [];
  public loaded = false;
  constructor(private myAnnouncementService: MyAnnouncementService) { }

  ngOnInit() {
    this.myAnnouncementService.getMyAnnouncementList()
      .do(() => this.loaded = true)
      .subscribe((myAnnouncements) => this.myAnnouncementList = myAnnouncements);
  }
}
