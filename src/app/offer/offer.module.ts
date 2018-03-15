import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {SharedModule} from '../shared/shared.module';

import {FiltersComponent} from './main-wall-page/filters/filters.component';
import {CardComponent} from './main-wall-page/card/card.component';

import {MainWallPageComponent} from './main-wall-page/main-wall-page.component';
import {MakeOfferPageComponent} from './make-offer-page/make-offer-page.component';

import {OfferService} from './make-offer-page/offer.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: MainWallPageComponent,
    }, {
      path: ':id',
      component: MakeOfferPageComponent,
    }]),
  ],
  declarations: [
    MainWallPageComponent,
    MakeOfferPageComponent,
    FiltersComponent,
    CardComponent
  ],
  exports: [],
  providers: [
    OfferService
  ]
})

export class OfferModule {
}
