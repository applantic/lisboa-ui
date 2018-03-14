import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './containers/app/app.component';
import {NotFoundPageComponent} from './containers/not-found-page/not-found-page.component';

import {LocalStorageService} from './services/local-storage.service';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import {environment} from '../../environments/environment';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
          provide: HTTP_INTERCEPTORS,
          useClass: HeadersInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BaseUrlInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: UnauthorizedInterceptor,
          multi: true
        },
        LocalStorageService,
      ],
    };
  }
}
