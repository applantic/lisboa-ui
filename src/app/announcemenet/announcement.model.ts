import {CircleIconTitleItem} from '../shared/components/circle-icon-title/circle-icon-title.component';

export interface NewAnnouncement {
  productKey: string;
  unitType: UnitType;
  price?: number;
  minQuantity?: number;
  maxQuantity?: number;
  period?: string;
  remarks?: string;
  deliveryType: DeliveryType;
  paymentDate?: string;
  deliveryDate?: string;
  deliveryRange?: string;
  zipCode?: string;
}

export interface MyAnnouncement extends NewAnnouncement {
  id?: string;
  version?: string;
  number?: string;
  product?: string;
  category?: string;
  createdDateTime?: string;
  ownerId?: string;
  offers?: Offers[];
}

export interface Offers {
  id: string;
  price: string;
  quantity: string;
  zipCode: string;
  city: string;
  announcementId: string;
  ownerId: string;
  ownerUsername: string;
}

export type DeliveryType = DeliveryEnum.BOTH_DELIVERIES | DeliveryEnum.WITH_DELIVERY | DeliveryEnum.WITHOUT_DELIVERY;
export type UnitType = UnitEnum.KG | UnitEnum.TON | UnitEnum.Q | UnitEnum.LITER;

export enum DeliveryEnum {
  WITH_DELIVERY = 'WITH_DELIVERY',
  WITHOUT_DELIVERY = 'WITHOUT_DELIVERY',
  BOTH_DELIVERIES = 'BOTH_DELIVERIES'
}

export enum UnitEnum {
  KG = 'kg',
  TON = 'ton',
  Q = 'szt',
  LITER = 'litrów'
}

export interface CircleIconTitleItem {
  shapeName: 'truck' | 'user' | 'info-standard';
  labelName: string;
  conditionArgument: string;
}

export const CIRCLE_SHAPE_TITLE_CONFIG: CircleIconTitleItem[] = [{
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

export const MY_ANNOUNCEMENT: MyAnnouncement = {
  productKey: 'default',
  deliveryType: DeliveryEnum.WITH_DELIVERY,
  unitType: UnitEnum.KG ,
}
