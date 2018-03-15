import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { DeliveryEnum } from '../../../announcemenet/announcement.model';

@Component({
  selector: 'pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() announcement;

  deliveryOptions = DeliveryEnum;
}
