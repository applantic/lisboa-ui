import {NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';

@NgModule({
  imports: [],
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
