import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router/router';

import {OfferResponsePageComponent} from './containers/offer-response-page/offer-response-page.component';




export const COMPONENTS = [
  OfferResponsePageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  declarations: COMPONENTS
})

export class MainWallModule {}