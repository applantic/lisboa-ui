import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';

import {CircleIconTitleComponent} from './components/circle-icon-title/circle-icon-title.component';
import {PrettyDropdownComponent} from './components/pretty-dropdown/pretty-dropdown.component';
import {FormControlAdapterComponent} from './components/form-control-adapter/form-control-adapter.component';

import {PtDate} from './pipes/pt-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  declarations: [
    PtDate,
    PrettyDropdownComponent,
    FormControlAdapterComponent,
    CircleIconTitleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ClarityModule,
    PtDate,
    PrettyDropdownComponent,
    FormControlAdapterComponent,
    CircleIconTitleComponent
  ]
})

export class SharedModule {
}

