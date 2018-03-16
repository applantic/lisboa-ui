import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';


import {PtDate} from './pipes/pt-date.pipe';
import {FormControlAdapterComponent} from './components/form-control-adapter/form-control-adapter.component';
import {PrettyDropdownComponent} from './components/pretty-dropdown/pretty-dropdown.component';
import {DisableControlDirective} from './directives/disable-control.directive';
import {CircleIconTitleComponent} from './components/circle-icon-title/circle-icon-title.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  declarations: [
    PtDate,
    PrettyDropdownComponent,
    FormControlAdapterComponent,
    CircleIconTitleComponent,
    DisableControlDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ClarityModule,
    PtDate,
    PrettyDropdownComponent,
    FormControlAdapterComponent,
    DisableControlDirective,
    CircleIconTitleComponent
  ]
})

export class SharedModule {}

