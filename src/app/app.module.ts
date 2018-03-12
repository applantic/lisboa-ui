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
import { DanceComponent } from './dance/dance.component';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  declarations: [DanceComponent]
})
export class AppModule {
  constructor() {
  }
}

