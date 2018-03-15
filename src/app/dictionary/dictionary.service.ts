import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {HttpClient} from '@angular/common/http';
import { Category, KeyNamePair } from './category.model';

@Injectable()
export class DictionaryService {

  constructor(private httpClient: HttpClient) {}

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('category');
  }

  getVovoideshipList(): Observable<KeyNamePair[]> {
    return this.httpClient.get<KeyNamePair[]>('voivodeship');
  }
}
