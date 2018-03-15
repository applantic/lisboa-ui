import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PtDate} from './pipes/pt-date.pipe';
import { PrettyDropdownComponent } from './components/pretty-dropdown/pretty-dropdown.component';
import { ClarityModule } from '@clr/angular';
import { FormControlAdapterComponent } from './components/form-control-adapter/form-control-adapter.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  declarations: [
    PtDate,
    PrettyDropdownComponent,
    FormControlAdapterComponent,
  ],
  exports: [
    ClarityModule,
    PtDate,
    PrettyDropdownComponent,
    FormControlAdapterComponent
  ]
})

export class SharedModule {}

