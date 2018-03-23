import 'rxjs/add/operator/takeUntil';
import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MyAnnouncement} from '../my-announcement.model';
import {MyAnnouncementService} from '../my-announcement.service';
import {MyAnnouncementFormComponent} from '../components/my-announcement-form/my-announcement-form.component';

@Component({
  selector: 'pt-edit-my-announcement-page',
  templateUrl: './edit-my-announcement-page.component.html',
  styleUrls: ['./edit-my-announcement-page.component.scss']
})
export class EditMyAnnouncementPageComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(MyAnnouncementFormComponent) myAnnouncementFormComponent: MyAnnouncementFormComponent;

  myAnnouncement: MyAnnouncement;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private router: Router,
              private locationRouter: Location,
              private myAnnouncementService: MyAnnouncementService) {
  }

  ngOnInit() {
    this.myAnnouncementService.myAnnouncementSubject
      .takeUntil(this.ngUnsubscribe)
      .subscribe((myAnnouncement) => this.myAnnouncement = myAnnouncement);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterViewInit() {
  }

  public clickBack() {
    this.locationRouter.back();
  }

  public clickedUpdate() {
    const {period, productKey, deliveryDate, ...rest} = this.myAnnouncementFormComponent.form.value;
    const {version, id, ownerId} = this.myAnnouncement;
    const myAnnouncement = Object.assign({}, {version, id, ownerId}, rest);

    this.myAnnouncementService.updateAnnouncement(myAnnouncement)
      .do((data) => this.router.navigate([`/ogloszenia`, data.id]))
      .subscribe();
  }
}
