import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { DeliveryEnum } from '../../model/my-announcement';

@Component({
  selector: 'pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() announcement;

  @Output() clickCard = new EventEmitter();
  @Output() clickPrimaryButton = new EventEmitter();

  deliveryOptions = DeliveryEnum;

  public clickedCard() {
    this.clickCard.emit();
  }

  public clickedPrimaryButton() {
    this.clickPrimaryButton.emit();
  }
}
