import {Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'pt-circle-icon-title',
  template: '<span *ngIf="items.length > 0"><clr-icon [attr.shape]="shapeName"></clr-icon>{{labelName}}</span>',
})
export class CircleIconTitleComponent implements OnInit, OnChanges {
  @Input() items: CircleIconTitleItem[];
  @Input() mainConditionArgument: string;

  public shapeName = '';
  public labelName = '';

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: CircleIconTitleComponentChanges) {

    if (changes.items) {
      this.itemsChanges(changes.items);
    }

    if (changes.mainConditionArgument) {
      this.mainConditionArgumentChanges(changes.mainConditionArgument);
    }
  }

  private itemsChanges(itemsChange: SimpleChange) {
    if (itemsChange.currentValue !== undefined) {
      this.actualComponentState();
    }
  }

  private mainConditionArgumentChanges(circleIconTitleItemChange: SimpleChange) {
    if (circleIconTitleItemChange.currentValue.length > 0) {
      this.actualComponentState();
    }
  }

  private actualComponentState() {
    const {shapeName, labelName} = this.items.find((el) => el.conditionArgument === this.mainConditionArgument);

    if (shapeName !== undefined) {
      this.shapeName = shapeName;
      this.labelName = labelName;
    }
  }

}

export interface CircleIconTitleItem {
  shapeName: 'truck' | 'user' | 'info-standard';
  labelName: string;
  conditionArgument: string;
}

interface CircleIconTitleComponentChanges extends SimpleChanges {
  items?: SimpleChange;
  mainConditionArgument?: SimpleChange;
}
