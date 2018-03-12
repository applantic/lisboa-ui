import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';

import {AppComponent} from './core/containers/app/app.component';
import {routes} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes,  { enableTracing: true }),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

