import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {SharedModule} from '../shared/shared.module';

import {FiltersComponent} from './offer-list-page/filters/filters.component';
import {CardComponent} from './offer-list-page/card/card.component';

import {OfferListPageComponent} from './offer-list-page/offer-list-page.component';
import {MakeOfferPageComponent} from './make-offer-page/make-offer-page.component';

import {OfferService} from './offer.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: OfferListPageComponent,
    }, {
      path: ':id',
      component: MakeOfferPageComponent,
    }]),
  ],
  declarations: [
    OfferListPageComponent,
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
