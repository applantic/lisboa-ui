import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import { AccountModule } from '../account/account.module';
import {OfferModule} from '../offer/offer.module';
import {UserProfileModule} from '../user-profile/user-profile.module';
import {AnnouncementModule} from '../announcement/my-announcement.module';

import {NavbarComponent} from './dashboard-page/navbar/navbar.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {FooterComponent} from './dashboard-page/footer/footer.component';

@NgModule({
  imports: [
  CommonModule,
    ClarityModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardPageComponent,
      children: [
        {path: '', redirectTo: '/tablica', pathMatch: 'full'},
        {
          path: 'tablica',
          loadChildren: () => OfferModule,
        },
        {
          path: 'konto',
          loadChildren: () => AccountModule,
        },
        {
          path: 'profil',
          loadChildren: () => UserProfileModule,
        },
        {
          path: 'ogloszenia',
          loadChildren: () => AnnouncementModule,
        },
      ]
    },
    ]),
  ],
  declarations: [
    NavbarComponent,
    DashboardPageComponent,
    FooterComponent
  ],
  providers: [],
})

export class DashboardModule {
}
