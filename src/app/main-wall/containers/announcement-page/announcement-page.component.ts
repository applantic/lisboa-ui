import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyAnnouncementService} from '../../services/my-announcement.service';
import {MyAnnouncement} from '../../model/my-announcement';

@Component({
  selector: 'pt-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit {
  public announcement: MyAnnouncement;

  constructor(private route: ActivatedRoute,
              private myAnnouncementService: MyAnnouncementService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.myAnnouncementService.getAnnouncementDetails(id)
      .subscribe((announcement) => this.announcement = announcement);
  }

}
