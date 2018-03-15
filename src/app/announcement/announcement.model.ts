import {UnitEnum, UnitType} from '../dictionary/unit.model';
import {DeliveryEnum} from '../dictionary/delivery.model';

export interface NewAnnouncement {
  productKey: string;
  unitType: UnitType;
  price?: number;
  minQuantity?: number;
  maxQuantity?: number;
  period?: string;
  remarks?: string;
  deliveryType: DeliveryEnum;
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

export const MY_ANNOUNCEMENT: MyAnnouncement = {
  productKey: 'default',
  deliveryType: DeliveryEnum.WITH_DELIVERY,
  unitType: UnitEnum.KG ,
};
