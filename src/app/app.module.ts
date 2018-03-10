import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {CoreModule} from './core/core.module';

import {AppComponent} from './core/containers/app/app.component';

import {routes} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

