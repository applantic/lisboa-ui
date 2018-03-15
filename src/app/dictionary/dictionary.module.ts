import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryService } from './dictionary.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DictionaryService
  ],
  declarations: []
})
export class DictionaryModule { }
