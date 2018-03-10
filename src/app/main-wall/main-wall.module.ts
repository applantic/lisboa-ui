import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router/router';

import {OfferResponsePageComponent} from './containers/offer-response-page/offer-response-page.component';
import {MainWallPageComponent} from './containers/main-wall-page/main-wall-page.component';




export const COMPONENTS = [
  OfferResponsePageComponent,
  MainWallPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  declarations: COMPONENTS
})

export class MainWallModule {}