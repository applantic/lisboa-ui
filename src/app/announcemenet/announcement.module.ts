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

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'dodaj',
      component: NewAnnouncementPageComponent,
    }, {
      path: 'dodano',
      component: SuccessAnnouncementPageComponent,
    }, {
      path: ':id',
      component: AnnouncementPageComponent,
    }]),
  ],
  declarations: [
    NewAnnouncementPageComponent,
    SuccessAnnouncementPageComponent,
    AnnouncementPageComponent
  ],
  exports: [],
  providers: [
    AnnouncementService
  ]
})

export class AnnouncementModule {
}
