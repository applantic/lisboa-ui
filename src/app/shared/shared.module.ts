import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PtDate} from './pipes/pt-date.pipe';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { ClarityModule } from '@clr/angular';
import { SelectDropdownFromComponent } from './components/select-dropdown-form/select-dropdown-form.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  declarations: [
    PtDate,
    SelectDropdownComponent,
    SelectDropdownFromComponent,
  ],
  exports: [
    ClarityModule,
    PtDate,
    SelectDropdownComponent,
    SelectDropdownFromComponent
  ]
})

export class SharedModule {}

