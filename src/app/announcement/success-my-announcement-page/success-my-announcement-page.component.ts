import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pt-success-my-announcement-page',
  templateUrl: './success-my-announcement-page.component.html',
  styleUrls: ['./success-my-announcement-page.component.scss']
})

export class SuccessMyAnnouncementPageComponent implements OnInit {
  public idMyAnnouncement: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idMyAnnouncement = this.route.snapshot.paramMap.get('id');
  }

}
