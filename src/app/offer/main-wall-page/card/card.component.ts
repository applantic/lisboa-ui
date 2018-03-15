import {Component, Input} from '@angular/core';
import {DELIVERY_CIRCLE_TITLE_CONFIG} from '../../../dictionary/delivery.model';
import {CircleIconTitleItem} from '../../../shared/components/circle-icon-title/circle-icon-title.component';
import {DeliveryEnum} from '../../../dictionary/delivery.model';

@Component({
  selector: 'pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() announcement;

  public circleShapeTitleConfig: CircleIconTitleItem[] = DELIVERY_CIRCLE_TITLE_CONFIG;
  public deliveryOptions = DeliveryEnum;
}
