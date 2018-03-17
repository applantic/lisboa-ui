import {UnitType} from '../dictionary/unit.model';
import {DeliveryEnum, DeliveryType} from '../dictionary/delivery.model';
import {AcceptedOfferStateEnum} from './my-announcement-page/my-announcement-page.component';

interface CoreMyAnnouncement {
  price?: number;
  minQuantity?: number;
  maxQuantity?: number;
  period?: string;
  remarks?: string;
  deliveryType: DeliveryType;
  deliveryDate?: string;
  deliveryRange?: string;
  zipCode?: string;
  unitType?: UnitType;
  paymentDate?: string;
}

export interface Announcement extends CoreMyAnnouncement {
  productKey: string;
}

export interface NewMyAnnouncement extends CoreMyAnnouncement {
  productKey: string;
}

export interface MyAnnouncement extends CoreMyAnnouncement {
  id: string;
  version: number;
  number?: string;
  product?: string;
  category?: string;
  createdDateTime: string;
  ownerId: string;
  offers?: Offers[];
}
export interface MockedOffers {
  acceptFlag: AcceptedOfferStateEnum;
  hasBadge: boolean;
  deliveryType: DeliveryType;
}

export interface Offers extends MockedOffers {
  id: string;
  price: string;
  quantity: string;
  zipCode: string;
  city: string;
  announcementId: string;
  ownerId: string;
  ownerUsername: string;
}

export const INIT_FORM_MY_ANNOUNCEMENT: Announcement = {
  productKey: 'default',
  price: undefined,
  minQuantity: undefined,
  maxQuantity: undefined,
  period: 'default',
  remarks: '',
  deliveryType: DeliveryEnum.WITH_DELIVERY,
  deliveryDate: '',
  deliveryRange: '',
  zipCode: '',
};
