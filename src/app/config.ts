import { DeliveryEnum } from './main-wall/model/my-announcement';

export interface DeliveryTypeMap {
  [key: string]: string;
}

export const PERIOD_LIST = ['przedpłata', 'w dniu dostawy', '1', '3', '7', '14', '21', '21+'];

export const DELIVERY_TYPE: DeliveryTypeMap = {
  [DeliveryEnum.WITH_DELIVERY]: 'z dostawą',
  [DeliveryEnum.WITHOUT_DELIVERY]: 'bez dostawy',
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

export const BASE_URL = 'https://protected-crag-77697.herokuapp.com/v1/';
