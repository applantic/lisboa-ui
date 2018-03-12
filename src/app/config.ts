import {DeliveryType} from './main-wall/model/my-announcement';

export type DeliveryTypeMap = {[key:string]:string};

export const PERIOD_LIST = ["prepayment", "delivery day", "1", "3", "7", "14", "21", "21+"];

export const DELIVERY_TYPE:DeliveryTypeMap = {
  [DeliveryType.WITH_DELIVERY]: "with delivery",
  [DeliveryType.WITHOUT_DELIVERY]: "without delivery",
  [DeliveryType.BOTH_DELIVERIES]: "both deliveries",
};

export interface Product {
  key:string;
  name:string;
}

export interface Category {
  key:string;
  name:string;
  products:Product[];
}

export const BASE_URL = 'https://protected-crag-77697.herokuapp.com/v1/'
