import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';

import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {DictionaryModule} from './dictionary/dictionary.module';

import {AppComponent} from './core/containers/app/app.component';
import {routes} from './routes';

@NgModule({
  providers: [
    DatePipe
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
    DictionaryModule.forRoot(),
    AuthModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule {
  constructor() {
  }
}
