import { DeliveryEnum } from './dictionary/delivery.model';

export interface DeliveryTypeMap {
  [key: string]: string;
}

export const PERIOD_LIST = ['przedpłata', 'w dniu dostawy', '1', '3', '7', '14', '21', '21+'];

export const DELIVERY_TYPE: DeliveryTypeMap = {
  [DeliveryEnum.WITH_DELIVERY]: 'z dostawą',
  [DeliveryEnum.WITHOUT_DELIVERY]: 'odbiór osobisty',
  [DeliveryEnum.BOTH_DELIVERIES]: 'do ustalenia',
};

