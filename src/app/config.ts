import { DeliveryEnum } from './announcmenet/announcement.model';

export interface DeliveryTypeMap {
  [key: string]: string;
}

export const PERIOD_LIST = ['przedpłata', 'w dniu dostawy', '1', '3', '7', '14', '21', '21+'];

export const DELIVERY_TYPE: DeliveryTypeMap = {
  [DeliveryEnum.WITH_DELIVERY]: 'z dostawą',
  [DeliveryEnum.WITHOUT_DELIVERY]: 'odbiór osobisty',
  [DeliveryEnum.BOTH_DELIVERIES]: 'do ustalenia',
};

export interface Product {
  key: string;
  name: string;
}

export interface Category {
  key: string;
  name: string;
  products: Product[];
}
