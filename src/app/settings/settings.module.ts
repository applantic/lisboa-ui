import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {SettingsPageComponent} from './settings-page/settings-page.component';
import {UserProfileComponent} from '../user-profile/user-profile-page/user-profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([{
      path: '',
      component: SettingsPageComponent,
    }]),
  ],
  declarations: [
    SettingsPageComponent
  ],
  exports: [],
})

export class SettingsModule {}
