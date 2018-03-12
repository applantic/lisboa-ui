import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'ptDate'
})
export class PtDate implements PipeTransform {
  constructor(public datePipe: DatePipe) {}

  transform(value): string {
    return this.datePipe.transform(value, 'dd.MM.yyyy');
  }
}
