import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {SettingsPageComponent} from './settings-page/settings-page.component';
import {UserProfileComponent} from '../user-profile/user-profile-page/user-profile-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { DictionaryModule } from '../dictionary/dictionary.module';



@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DictionaryModule,
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
