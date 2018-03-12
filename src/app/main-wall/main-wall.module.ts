import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CardComponent} from './components/card/card.component';
import {MainWallPageComponent} from './containers/main-wall-page/main-wall-page.component';
import {AddAnnouncementPageComponent} from './containers/add-announcement-page/add-announcement-page.component';
import {AnnouncementResponsePageComponent} from './containers/announcement-response-page/announcement-response-page.component';
import {ClarityModule} from '@clr/angular';

import {MyAnnouncementService} from './services/my-announcement.service';

export const COMPONENTS = [
  CardComponent,
  MainWallPageComponent,
  AddAnnouncementPageComponent,
  AnnouncementResponsePageComponent
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'add-announcement', component: AddAnnouncementPageComponent },
      { path: 'announcement-response', component: AnnouncementResponsePageComponent },
      { path: '', component: MainWallPageComponent },
    ]),
  ],
  declarations: COMPONENTS,
  providers: [
    MyAnnouncementService
  ]
})

export class MainWallModule {}
