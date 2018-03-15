import {CircleIconTitleItem} from '../shared/components/circle-icon-title/circle-icon-title.component';

export enum DeliveryEnum {
  WITH_DELIVERY = 'WITH_DELIVERY',
  WITHOUT_DELIVERY = 'WITHOUT_DELIVERY',
  BOTH_DELIVERIES = 'BOTH_DELIVERIES'
}

export type DeliveryType = DeliveryEnum.BOTH_DELIVERIES | DeliveryEnum.WITH_DELIVERY | DeliveryEnum.WITHOUT_DELIVERY;

export interface DeliveryCircleTitleConfig extends CircleIconTitleItem {
  shapeName: 'truck' | 'user' | 'info-standard';
}

export const DELIVERY_CIRCLE_TITLE_CONFIG: DeliveryCircleTitleConfig[] = [{
  shapeName: 'truck',
  labelName: 'Z dostawą',
  conditionArgument: DeliveryEnum.WITH_DELIVERY,
}, {
  shapeName: 'user',
  labelName: 'Odbiór osobisty',
  conditionArgument: DeliveryEnum.WITHOUT_DELIVERY,
}, {
  shapeName: 'info-standard',
  labelName: 'Do ustalenia',
  conditionArgument: DeliveryEnum.BOTH_DELIVERIES,
}];
