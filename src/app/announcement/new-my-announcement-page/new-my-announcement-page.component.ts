import {Component, OnInit, ViewChild, AfterViewInit,} from '@angular/core';
import {Location} from '@angular/common';
import {MyAnnouncementService} from '../my-announcement.service';
import {MyAnnouncement} from '../my-announcement.model';
import {MyAnnouncementFormComponent} from '../components/my-announcement-form/my-announcement-form.component';

@Component({
  selector: 'pt-new-my-announcement-page',
  templateUrl: './new-my-announcement-page.component.html',
  styleUrls: ['./new-my-announcement-page.component.scss']
})

export class NewMyAnnouncementPageComponent implements AfterViewInit, OnInit {
  @ViewChild(MyAnnouncementFormComponent) announcementFormComponent: MyAnnouncementFormComponent;

  myAnnouncement: MyAnnouncement;

  constructor(private locationRouter: Location,
              private myAnnouncementService: MyAnnouncementService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  public clickBack() {
    this.locationRouter.back();
  }

  public clickedSave() {
    this.myAnnouncementService.clickedSaveAction(this.announcementFormComponent.form.value);
  }
}
