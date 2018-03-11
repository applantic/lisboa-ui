import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataMockService {

  constructor(private http: HttpClient,
              private localStorageService:LocalStorageService) {
    this.localStorageService.initializeLocalStorage();
  }
  
}
