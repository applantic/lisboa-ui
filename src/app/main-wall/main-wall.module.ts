import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {CardComponent} from './components/card/card.component';
import {SelectDropdownComponent} from './components/select-dropdown/select-dropdown.component';

import {MainWallPageComponent} from './containers/main-wall-page/main-wall-page.component';
import {AddAnnouncementPageComponent} from './containers/add-announcement-page/add-announcement-page.component';
import {AnnouncementResponsePageComponent} from './containers/announcement-response-page/announcement-response-page.component';
import {AnnouncementPageComponent} from './containers/announcement-page/announcement-page.component';

import {MyAnnouncementService} from './services/my-announcement.service';

export const COMPONENTS = [
  CardComponent,
  MainWallPageComponent,
  AddAnnouncementPageComponent,
  AnnouncementResponsePageComponent,
  AnnouncementPageComponent,
  SelectDropdownComponent
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: MainWallPageComponent},
      {path: 'new-announcement', component: AddAnnouncementPageComponent},
      {path: 'announcement-response', component: AnnouncementResponsePageComponent},
      {path: 'announcement/:id', component: AnnouncementPageComponent},
    ]),
  ],
  declarations: COMPONENTS,
  providers: [
    MyAnnouncementService
  ]
})

export class MainWallModule {
}
