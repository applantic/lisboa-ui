import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';

import {Category} from '../../config';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryListService {

  constructor(private httpClient: HttpClient) {}

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`category`)
      .do((data) => console.log('getCategoryList: ', data));
  }

}
