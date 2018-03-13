import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MyAnnouncement } from '../../model/my-announcement';
import { MyAnnouncementService } from '../../services/my-announcement.service';

@Component({
  selector: 'pt-main-wall-page',
  templateUrl: './main-wall-page.component.html',
  styleUrls: ['./main-wall-page.component.scss']
})
export class MainWallPageComponent implements OnInit {
  announcements: MyAnnouncement[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private myAnnouncementService: MyAnnouncementService) { }

  ngOnInit() {
    this.myAnnouncementService.getListAnnouncement();

    this.myAnnouncementService.listAnnouncementSubject
      .do((a) => console.log(a))
      .subscribe((announcements) => this.announcements = announcements);
  }

  public clickedAnnouncementCard(id: string) {
    this.router.navigate([`./announcement/${id}`], {relativeTo: this.route});
  }

}
