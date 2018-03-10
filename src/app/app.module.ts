import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from './core/core.module';

import {AppComponent} from './core/containers/app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

