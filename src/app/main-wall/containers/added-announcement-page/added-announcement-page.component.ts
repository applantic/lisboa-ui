import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pt-added-announcement-page',
  templateUrl: './added-announcement-page.component.html',
  styleUrls: ['./added-announcement-page.component.scss']
})
export class AddedAnnouncementPageComponent implements OnInit {
  public idAnnouncement: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idAnnouncement = this.route.snapshot.paramMap.get('id');
  }

}
