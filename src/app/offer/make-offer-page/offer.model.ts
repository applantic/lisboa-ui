import {DeliveryType, UnitType} from '../../announcemenet/announcement.model';

export interface Offer {
  quantity: number;
  price: number;
  zipCode: string;
  city: string;
  announcementId: string;
}

export interface PublicAnnouncementDetail {
  id: string;
  productKey: string;
  unitType: UnitType;
  price?: number;
  minQuantity?: number;
  maxQuantity?: number;
  period?: string;
  remarks?: string;
  deliveryType: DeliveryType;
  paymentDate?: string;
  deliveryDate?: string;
  deliveryRange?: string;
  zipCode?: string;
}
