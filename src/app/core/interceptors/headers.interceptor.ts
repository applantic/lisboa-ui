import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `${this.auth.getToken()}`,
        'Content-Type': 'application/json; charset=utf-8'
      }
    });

    return next.handle(request);
  }
}
