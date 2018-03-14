import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {SettingsPageComponent} from './settings-page/settings-page.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    SettingsPageComponent
  ],
  exports: [],
})

export class SettingsModule {}
