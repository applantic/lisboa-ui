import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';

import {Category} from '../../config';

import {DataService} from './data.service';

@Injectable()
export class CategoryListService {

  constructor(private dataService: DataService) {

  }

  getCategoryList(): Observable<Category[]> {
    return this.dataService.getCategoryList()
      .do((data) => console.log('getCategoryList: ', data));
  }

}
