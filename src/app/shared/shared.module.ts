import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PtDate} from './pipes/pt-date.pipe';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { ClarityModule } from '@clr/angular';
import { CategoryListService } from './services/category-list.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  providers: [
    CategoryListService
  ],
  declarations: [
    PtDate,
    SelectDropdownComponent,
  ],
  exports: [
    ClarityModule,
    PtDate,
    SelectDropdownComponent
  ]
})

export class SharedModule {}

