import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppComponent} from './containers/app/app.component';
import {NotFoundPageComponent} from './containers/not-found-page/not-found-page.component';

import {DataService} from './services/data.service';
import {DataMockService} from './services/data-mock.service';

import {environment} from '../../environments/environment';

export const dataFactory = () => {
  if (environment.mock) {
    return new DataMockService();
    
  } else {
    return new DataService();
  }
};

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})

export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: DataService,
          useFactory: dataFactory
        }
      ],
    };
  }
}