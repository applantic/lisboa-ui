import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {UserPanelModule} from '../user-panel/user-panel.module';
import {MainWallModule} from '../main-wall/main-wall.module';
import {CommentsModule} from '../comments/comments.module';

import {AuthGuard} from '../auth/services/auth-guard.service';

import {NavbarComponent} from './components/navbar/navbar.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {path: '', redirectTo: '/main-wall', pathMatch: 'full'},
          {
            path: 'main-wall',
            loadChildren: () => MainWallModule,
          },
          {
            path: 'user-panel',
            loadChildren: () => UserPanelModule,
            canActivate: [AuthGuard],
          },
          {
            path: 'comments',
            loadChildren: () => CommentsModule,
          },
        ]
      },
    ]),
  ],
  providers: [],
  declarations: [NavbarComponent, DashboardComponent, FooterComponent]
})

export class DashboardModule {
}
