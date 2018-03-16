import {Component, OnInit, ViewChild, AfterViewInit,} from '@angular/core';
import {Location} from '@angular/common';
import {MyAnnouncement} from '../my-announcement.model';
import {MyAnnouncementService} from '../my-announcement.service';
import {MyAnnouncementFormComponent} from '../components/my-announcement-form/my-announcement-form.component';

@Component({
  selector: 'pt-edit-my-announcement-page',
  templateUrl: './edit-my-announcement-page.component.html',
  styleUrls: ['./edit-my-announcement-page.component.scss']
})
export class EditMyAnnouncementPageComponent implements AfterViewInit, OnInit {
  @ViewChild(MyAnnouncementFormComponent) myAnnouncementFormComponent: MyAnnouncementFormComponent;

  myAnnouncement: MyAnnouncement;

  constructor(private locationRouter: Location,
              private myAnnouncementService: MyAnnouncementService) {
  }

  ngOnInit() {
    this.myAnnouncement = this.myAnnouncementService.myAnnouncementSubject.value;
  }

  ngAfterViewInit() {
  }

  public clickBack() {
    this.locationRouter.back();
  }

  public clickedUpdate() {
    this.myAnnouncementService.clickedUpdateAction(this.myAnnouncementFormComponent.form.value);
  }
}
