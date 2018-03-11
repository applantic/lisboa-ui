import { Component, OnInit } from '@angular/core';
import { MyAnnouncementService } from '../../services/my-announcement.service';
import { MyAnnouncement } from '../../model/my-announcement';


@Component({
  selector: 'pt-add-announcement-page',
  templateUrl: './add-announcement-page.component.html',
  styleUrls: ['./add-announcement-page.component.scss']
})

export class AddAnnouncementPageComponent implements OnInit {
  announcements: MyAnnouncement[] = [];

  constructor(private myAnnouncementService: MyAnnouncementService) { }

  ngOnInit() {
    this.myAnnouncementService.getListAnnouncement()
      .do((a) => console.log(a))
      .subscribe((announcements) => this.announcements = announcements);
  }
}
