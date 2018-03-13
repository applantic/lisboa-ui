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
  public announcements: MyAnnouncement[] = [];
  public loaded = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private myAnnouncementService: MyAnnouncementService) { }

  ngOnInit() {
    this.myAnnouncementService.getListAnnouncement()
      .do((a) => console.log(a))
      .subscribe((announcements) => this.announcements = announcements);

    this.myAnnouncementService.listAnnouncementLoadedSubject
      .do((loaded) => console.log('loaded: ', loaded))
      .subscribe((loaded) => this.loaded = loaded);
  }

  public clickedAnnouncementCard(id: string) {
    this.router.navigate([`./announcement/${id}`], {relativeTo: this.route});
  }

  public clickedMakeAnOffer(id: string) {
    this.router.navigate([`./announcement/${id}`], {relativeTo: this.route});
  }

}
