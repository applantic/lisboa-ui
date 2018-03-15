import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { CategoryListService } from '../../services/category-list.service';
import { Subject } from 'rxjs/Subject';
import { Category, Product } from '../../../config';

@Component({
  selector: 'pt-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent {
  private selectedOption;
  @Input() choseValue = '';
  @Input() placeholder = 'Wybierz';
  @Input() options;

  public onClick(option) {
    this.selectedOption = option;
  }
}

// import {Component, forwardRef, Input} from '@angular/core';
// import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

// @Component({
//   selector: 'pt-select-dropdown',
//   templateUrl: './select-dropdown.component.html',
//   styleUrls: ['./select-dropdown.component.scss'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => SelectDropdownComponent),
//       multi: true
//     }
//   ]
// })
// export class SelectDropdownComponent implements ControlValueAccessor {

//   constructor() {
//   }

//   @Input()
//   choseValue = '';

//   get ChoseValue() {
//     return this.choseValue;
//   }

//   set ChoseValue(val) {
//     this.choseValue = val;
//     this.propagateChange(this.choseValue);
//   }

//   public setNewValue(value: any) {
//     this.ChoseValue = value;
//   }

//   writeValue(value: any) {
//     if (value !== undefined) {
//       this.choseValue = value;
//     }
//   }

//   propagateChange = (_: any) => {
//   }

//   registerOnChange(fn) {
//     this.propagateChange = fn;
//   }

//   registerOnTouched() {
//   }

// }
