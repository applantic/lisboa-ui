export type DeliveryTypeMap = {[key:string]:string};

export const PERIOD_LIST = ["prepayment", "delivery day", "1", "3", "7", "14", "21", "21+"];

export const DELIVERY_TYPE:DeliveryTypeMap = {
  "WITH_DELIVERY": "with delivery",
  "WITHOUT_DELIVERY": "without delivery",
  "BOTH_DELIVERIES": "both deliveries",
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