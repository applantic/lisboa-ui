export interface MyAnnouncement {
  id:string;
  productKey:string;
  createData:string;
  lastUpdated:string;
  price?:number;
  minQuantity?:number;
  maxQuantity?:number;
  period?:string;
  description?:string;
  delivery:DeliveryType;
  paymentDate?:string;
  deliveryDate?:string;
  deliveryRange?:string;
  zipCode?:string;
}

export enum DeliveryType{
  WITH_DELIVERY, WITHOUT_DELIVERY, BOTH_DELIVERIES
}