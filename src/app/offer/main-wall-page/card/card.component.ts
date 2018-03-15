import {Component, Input} from '@angular/core';
import {CIRCLE_SHAPE_TITLE_CONFIG, DeliveryEnum} from '../../../announcemenet/announcement.model';
import {CircleIconTitleItem} from '../../../shared/components/circle-icon-title/circle-icon-title.component';

@Component({
  selector: 'pt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() announcement;

  public circleShapeTitleConfig: CircleIconTitleItem[] = CIRCLE_SHAPE_TITLE_CONFIG;
  public deliveryOptions = DeliveryEnum;
}
