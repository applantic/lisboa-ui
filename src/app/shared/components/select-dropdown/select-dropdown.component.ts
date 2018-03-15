import { Component, forwardRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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
  @Output() selectedOptionEmitter: EventEmitter<string> = new EventEmitter();

  public onClick(option) {
    this.selectedOptionEmitter.emit(option.value);
    this.selectedOption = option;
  }
}
