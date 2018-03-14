import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { CategoryListService } from '../../services/category-list.service';
import { Subject } from 'rxjs/Subject';
import { Category, Product } from '../../../config';

@Component({
  selector: 'pt-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
})
export class SelectDropdownComponent implements OnInit, OnDestroy {
  constructor(private categoryListService: CategoryListService) {}

  public categoryList: Category[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public chosenProductName: string;
  @Input() choseValue = '';

  ngOnInit() {
    this.categoryListService.getCategoryList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((data) => this.categoryList = data);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private actualChosenProduct(productKey: string) {
    this.chosenProductName = getProductNameByKey(this.categoryList, productKey);
  }
}

function getProductNameByKey(list: Item[] = [], productKey): string {
  const newList = [...list];

  return newList.reduce((acc, item, i, arr) => {
    if (item.key === productKey && acc === '') {

      arr.splice(1);
      return item.name;
    } else {

      if (item.products && acc === '') {
        acc += getProductNameByKey(item.products, productKey);
      }

      return acc;
    }
  }, '');
}

export interface Item extends Product {
  products?: Item[];
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
