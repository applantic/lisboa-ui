import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found-page/not-found-page.component';
import {AuthGuard} from './auth/services/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: '/main-wall', pathMatch: 'full' },
  {
    path: 'main-wall',
    loadChildren: './main-wall/main-wall.module#MainWallModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'user-panel',
    loadChildren: './user-panel/user-panel.module#UserPanelModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
