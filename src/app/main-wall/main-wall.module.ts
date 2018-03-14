import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {SharedModule} from '../shared/shared.module';

import {CardComponent} from './components/card/card.component';
import {SelectDropdownComponent} from './components/select-dropdown/select-dropdown.component';

import {MainWallPageComponent} from './containers/main-wall-page/main-wall-page.component';
import {AddAnnouncementPageComponent} from './containers/add-announcement-page/add-announcement-page.component';
import {AnnouncementResponsePageComponent} from './containers/announcement-response-page/announcement-response-page.component';
import {AnnouncementPageComponent} from './containers/announcement-page/announcement-page.component';
import {AddedAnnouncementPageComponent} from './containers/added-announcement-page/added-announcement-page.component';

import {MyAnnouncementService} from './services/my-announcement.service';
import {AnnouncementGuardService} from './services/announcement-guard.service';
import { FiltersComponent } from './containers/filters/filters.component';
import { PtDate } from '../shared/pipes/pt-date.pipe';

export const COMPONENTS = [
  CardComponent,
  MainWallPageComponent,
  AddAnnouncementPageComponent,
  AddedAnnouncementPageComponent,
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
    SharedModule,
    RouterModule.forChild([
      {path: '', component: MainWallPageComponent},
      {path: 'new-announcement', component: AddAnnouncementPageComponent},
      {path: 'added-announcement', component: AddedAnnouncementPageComponent},
      {path: 'announcement-response', component: AnnouncementResponsePageComponent},
      {
        path: 'announcement/:id',
        component: AnnouncementPageComponent,
        canActivate: [AnnouncementGuardService]
      },
    ]),
  ],
  declarations: [
    ...COMPONENTS,
    PtDate,
    FiltersComponent
  ],
  providers: [
    MyAnnouncementService,
    AnnouncementGuardService
  ]
})

export class MainWallModule {
}
