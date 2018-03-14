import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User, Authenticate } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable()
export class AuthService {
  TOKEN_KEY = 'token';
  public authorized = true;

  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
  }

  getToken() {
    return this.localStorageService.get(this.TOKEN_KEY);
  }

  login({ username, password }: Authenticate) {
    return this.http.post('auth/login', { username, password }, { observe: 'response' })
      .do((res) => {
        this.localStorageService.set(this.TOKEN_KEY, res.headers.get('Authorization'));
      });
  }

  register({ username, password, repeatPassword }) {
    return this.http.post('register', { username, password, repeatPassword })
      .do((res) => {
        console.log(res);
      });
  }

  logout() {
    this.localStorageService.remove(this.TOKEN_KEY);
  }
}
