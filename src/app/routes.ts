import { Routes } from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found-page/not-found-page.component';
import {AuthGuard} from './auth/services/auth-guard.service';
import {UserPanelModule} from './user-panel/user-panel.module';
import {MainWallModule} from './main-wall/main-wall.module';

export const routes: Routes = [
  { path: '', redirectTo: '/main-wall', pathMatch: 'full' },
  {
    path: 'main-wall',
    loadChildren: () => MainWallModule,
    // loadChildren: './main-wall/main-wall.module#MainWallModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'user-panel',
    loadChildren: () => UserPanelModule,
    // loadChildren: './user-panel/user-panel.module#UserPanelModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];
