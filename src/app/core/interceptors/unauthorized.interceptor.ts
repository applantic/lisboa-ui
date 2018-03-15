import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService,
              private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .catch((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.router.navigate(['logowanie']);
          }
        }

        return Observable.throw(err);
      });
  }
}
