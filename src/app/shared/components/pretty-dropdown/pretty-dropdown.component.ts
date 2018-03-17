import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pt-pretty-dropdown',
  templateUrl: './pretty-dropdown.component.html',
  styleUrls: ['./pretty-dropdown.component.scss'],
})
export class PrettyDropdownComponent {
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
