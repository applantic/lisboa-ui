import { Injectable } from '@angular/core';

const NAME_DATA = 'lisboaUi';

@Injectable()
export class LocalStorageService {
  constructor() {}

  public set(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public initialize() {
    if (!localStorage.getItem(NAME_DATA)) {
      localStorage.setItem(NAME_DATA, '{}');
    }
  }

  private getData() {
    return JSON.parse(localStorage.getItem(NAME_DATA));
  }
}
