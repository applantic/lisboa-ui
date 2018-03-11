import {Component, OnInit} from '@angular/core';
import {MyAnnouncementService} from '../../services/my-announcement.service';
import {MyAnnouncement} from '../../model/my-announcement';

@Component({
  selector: 'pt-announcement-response-page',
  templateUrl: './announcement-response-page.component.html',
  styleUrls: ['./announcement-response-page.component.scss']
})
export class AnnouncementResponsePageComponent implements OnInit {
  public listAnnouncement: MyAnnouncement[];

  constructor(private myAnnouncementService: MyAnnouncementService) {
  }

  ngOnInit() {
    this.myAnnouncementService.getListAnnouncement()
      .subscribe((data) => this.listAnnouncement = data);

  }

}
