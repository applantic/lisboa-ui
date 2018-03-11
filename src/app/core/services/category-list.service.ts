import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/observable';

import {MyAnnouncement, CategoryList} from '../../main-wall/model/my-announcement';

@Injectable()
export class CategoryListService {

  constructor(private dataService: DataService) {

  }

  getCategoryList(): Observable<CategoryList> {
    return this.dataService.getCategoryList()
      .do((data) => console.log('getCategoryList: ', data));
  }

}
