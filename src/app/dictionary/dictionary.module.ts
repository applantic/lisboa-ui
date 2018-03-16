import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DictionaryService} from './dictionary.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DictionaryModule {
  static forRoot() {
    return {
      ngModule: DictionaryModule,
      providers: [DictionaryService]
    };
  }
}
