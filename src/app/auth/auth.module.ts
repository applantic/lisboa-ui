import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginPageComponent} from './containers/login-page/login-page.component';

import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';

export const COMPONENTS = [
  LoginPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forChild([{path: 'login', component: LoginPageComponent}]),
  ],
})
export class RootAuthModule {
}
