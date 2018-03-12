import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { AuthGuard } from '../auth/services/auth-guard.service';
import { UserPanelModule } from '../user-panel/user-panel.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainWallModule } from '../main-wall/main-wall.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: '',
            redirectTo: '/main-wall',
          },
          {
            path: 'main-wall',
            loadChildren: () => MainWallModule,
          },
          {
            path: 'user-panel',
            loadChildren: () => UserPanelModule,
            canActivate: [AuthGuard],
          },
        ]
      },
    ]),
  ],
  providers: [],
  declarations: [NavbarComponent, DashboardComponent]
})

export class DashboardModule { }
