import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Account} from './account.model';



@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  changeAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>('account', account);
  }

}
