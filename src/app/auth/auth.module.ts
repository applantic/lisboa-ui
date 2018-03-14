import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'logout', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]),
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
