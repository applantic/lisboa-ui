import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public initializeLocalStorage(){
    if (!localStorage.getItem('lisboaUi')) {
      localStorage.setItem('lisboaUi', '{}');
    }
  }
}
