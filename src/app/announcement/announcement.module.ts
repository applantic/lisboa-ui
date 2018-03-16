import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {SharedModule} from '../shared/shared.module';

import {NewAnnouncementPageComponent} from './new-announcement-page/new-announcement-page.component';
import {SuccessAnnouncementPageComponent} from './success-announcement-page/success-announcement-page.component';
import {AnnouncementPageComponent} from './announcement-page/announcement-page.component';

import {AnnouncementService} from './announcement.service';
import { DictionaryModule } from '../dictionary/dictionary.module';
import { MyAnnouncementsPageComponent } from './my-announcements-page/my-announcements-page.component';
import { CardComponent } from './my-announcements-page/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    DictionaryModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'dodaj',
      component: NewAnnouncementPageComponent,
    }, {
      path: 'dodano',
      component: SuccessAnnouncementPageComponent,
    }, {
      path: 'moje',
      component: MyAnnouncementsPageComponent
    }, {
      path: ':id',
      component: AnnouncementPageComponent,
    }]),
  ],
  declarations: [
    NewAnnouncementPageComponent,
    SuccessAnnouncementPageComponent,
    AnnouncementPageComponent,
    MyAnnouncementsPageComponent,
    CardComponent
  ],
  exports: [],
  providers: [
    AnnouncementService
  ]
})

export class AnnouncementModule {
}
