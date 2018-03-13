import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() announcement;

  @Output() clickCard = new EventEmitter();

  public clickedCard() {
    this.clickCard.emit();
  }
}
