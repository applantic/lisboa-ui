import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PtDate} from './pipes/pt-date.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PtDate
  ],
  exports: [
    PtDate
  ]
})

export class SharedModule {}

