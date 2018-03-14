import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {UserPanelPageComponent} from './containers/user-panel-page/user-panel-page.component';
import {AnnouncementPageComponent} from './containers/announcement-page/announcement-page.component';

export const COMPONENTS = [
  UserPanelPageComponent,
  AnnouncementPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {path: '', component: UserPanelPageComponent},
      {
        path: 'announcement/:id',
        component: AnnouncementPageComponent
      },
    ]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})

export class UserPanelModule {}
