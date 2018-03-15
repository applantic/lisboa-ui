import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnnouncementService} from '../announcement.service';
import {MyAnnouncement} from '../announcement.model';

@Component({
  selector: 'pt-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit {
  public announcement: MyAnnouncement;

  constructor(private route: ActivatedRoute,
              private announcementService: AnnouncementService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.announcementService.getAnnouncementDetails(id)
      .do((announcement) => console.log('announcement: ', announcement))
      .subscribe((announcement) => this.announcement = announcement);
  }

}
