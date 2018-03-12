import {Routes} from '@angular/router';
import {NotFoundPageComponent} from './core/containers/not-found-page/not-found-page.component';
import {DashboardModule} from './dashboard/dashboard.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => DashboardModule,
  },
  { path: '**', component: NotFoundPageComponent },
];
