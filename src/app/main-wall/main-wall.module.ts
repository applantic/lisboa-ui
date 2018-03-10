import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {OfferResponsePageComponent} from './containers/offer-response-page/offer-response-page.component';
import {MainWallPageComponent} from './containers/main-wall-page/main-wall-page.component';
import {AddOfferPageComponent} from './containers/add-offer-page/add-offer-page.component';




export const COMPONENTS = [
  OfferResponsePageComponent,
  MainWallPageComponent,
  AddOfferPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'offer-response', component: OfferResponsePageComponent },
      { path: 'add-offer', component: AddOfferPageComponent },
      { path: '', component: MainWallPageComponent },
    ]),
  ],
  declarations: COMPONENTS
})

export class MainWallModule {}