import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pt-select-dropdown-form',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropdownFromComponent),
      multi: true
    }
  ]
})
export class SelectDropdownFromComponent implements ControlValueAccessor {

  constructor() {
  }

  @Input()
  choseValue = '';

  get ChoseValue() {
    return this.choseValue;
  }

  set ChoseValue(val) {
    this.choseValue = val;
    this.propagateChange(this.choseValue);
  }

  public setNewValue(value: any) {
    this.ChoseValue = value;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.choseValue = value;
    }
  }

  propagateChange = (_: any) => {
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

}
