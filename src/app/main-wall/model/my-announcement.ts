export interface MyAnnouncement {
  id: string;
  productKey: string;
  createData: string;
  unitType: UnitType;
  lastUpdated: string;
  price?: number;
  minQuantity?: number;
  maxQuantity?: number;
  period?: string;
  description?: string;
  delivery: DeliveryType;
  paymentDate?: string;
  deliveryDate?: string;
  deliveryRange?: string;
  zipCode?: string;
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
