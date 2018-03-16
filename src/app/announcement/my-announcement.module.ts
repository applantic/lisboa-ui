import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {SharedModule} from '../shared/shared.module';

import {MyAnnouncementFormComponent} from './components/my-announcement-form/my-announcement-form.component';
import {CardComponent} from './my-announcement-list-page/card/card.component';

import {NewMyAnnouncementPageComponent} from './new-my-announcement-page/new-my-announcement-page.component';
import {SuccessMyAnnouncementPageComponent} from './success-my-announcement-page/success-my-announcement-page.component';
import {AnnouncementPageComponent} from './my-announcement-page/my-announcement-page.component';
import {EditMyAnnouncementPageComponent} from './edit-my-announcement-page/edit-my-announcement-page.component';
import {MyAnnouncementListPageComponent} from './my-announcement-list-page/my-announcement-list-page.component';

import {MyAnnouncementService} from './my-announcement.service';
import {MyAnnouncementGuardService} from './my-announcement-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'edytuj/:id',
      component: EditMyAnnouncementPageComponent,
      canActivate: [MyAnnouncementGuardService]
    }, {
      path: 'dodaj',
      component: NewMyAnnouncementPageComponent,
    }, {
      path: 'dodano/:id',
      component: SuccessMyAnnouncementPageComponent,
    }, {
      path: 'moje',
      component: MyAnnouncementListPageComponent
    }, {
      path: ':id',
      component: AnnouncementPageComponent,
      canActivate: [MyAnnouncementGuardService]
    }]),
  ],
  declarations: [
    NewMyAnnouncementPageComponent,
    SuccessMyAnnouncementPageComponent,
    AnnouncementPageComponent,
    EditMyAnnouncementPageComponent,
    MyAnnouncementFormComponent,
    AnnouncementPageComponent,
    MyAnnouncementListPageComponent,
    CardComponent
  ],
  exports: [],
  providers: [
    MyAnnouncementService,
    MyAnnouncementGuardService
  ]
})

export class AnnouncementModule {
}
