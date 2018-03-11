import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
              private authService:AuthService) {
  }

  canActivate():Observable<boolean> {
    if (this.authService.authorized) {
      return of(true)
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
