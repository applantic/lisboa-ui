import {DeliveryEnum} from './main-wall/model/my-announcement';

export type DeliveryTypeMap = {[key:string]:string};

export const PERIOD_LIST = ["prepayment", "delivery day", "1", "3", "7", "14", "21", "21+"];

export const DELIVERY_TYPE:DeliveryTypeMap = {
  [DeliveryEnum.WITH_DELIVERY]: "with delivery",
  [DeliveryEnum.WITHOUT_DELIVERY]: "without delivery",
  [DeliveryEnum.BOTH_DELIVERIES]: "both deliveries",
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

export const BASE_URL = 'http://192.168.1.13:8090/v1/'
