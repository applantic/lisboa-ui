import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found-page/not-found-page.component';
import {AuthGuard} from './auth/services/auth-guard.service';
import {UserPanelModule} from './user-panel/user-panel.module';
import {MainWallModule} from './main-wall/main-wall.module';
import { DashboardModule } from './dashboard/dashboard.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => DashboardModule,
  },
  { path: '**', component: NotFoundPageComponent },
];
