import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MainWallPageComponent} from './containers/main-wall-page/main-wall-page.component';
import {AddAnnouncementPageComponent} from './containers/add-announcement-page/add-announcement-page.component';
import {AnnouncementResponsePageComponent} from './containers/announcement-response-page/announcement-response-page.component';

export const COMPONENTS = [
  MainWallPageComponent,
  AddAnnouncementPageComponent,
  AnnouncementResponsePageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'add-announcement', component: AddAnnouncementPageComponent },
      { path: 'announcement-response', component: AnnouncementResponsePageComponent },
      { path: '', component: MainWallPageComponent },
    ]),
  ],
  declarations: COMPONENTS
})

export class MainWallModule {}