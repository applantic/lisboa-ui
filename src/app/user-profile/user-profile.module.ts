import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([]),
  ],
  declarations: [],
  exports: [],
})

export class UserProfileModule {}
