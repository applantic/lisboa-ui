import {NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import {
  NbEmailPassAuthProvider,
  NbAuthModule,
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';

@NgModule({
  imports: [
    NbLayoutModule,
    NbSidebarModule,
    RouterModule.forChild([{
      path: 'auth',
      component: NbAuthComponent,
      children: [
        {
          path: '',
          component: NbLoginComponent,
        },
        {
          path: 'login',
          component: NbLoginComponent,
        },
        {
          path: 'register',
          component: NbRegisterComponent,
        },
        {
          path: 'logout',
          component: NbLogoutComponent,
        },
        {
          path: 'request-password',
          component: NbRequestPasswordComponent,
        },
        {
          path: 'reset-password',
          component: NbResetPasswordComponent,
        },
      ],
    }]),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {},
        },
      },
      forms: {},
    }),
  ],
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: [NbSidebarService, AuthService, AuthGuard],
    };
  }
}
