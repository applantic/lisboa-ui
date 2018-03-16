import {DeliveryType} from '../../dictionary/delivery.model';
import {UnitType} from '../../dictionary/unit.model';

export interface AnnouncementPublic {
  id: string;
  productKey: string;
  createData: string;
  unitType: UnitType;
  lastUpdated: string;
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
