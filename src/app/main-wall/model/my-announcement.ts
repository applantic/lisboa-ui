export interface MyAnnouncement {
  id: string;
  price: number;
  minQuantity: number;
  description: string;
  delivery: boolean;
  paymentDate: string;
  deliveryDate: string;
  deliveryRange: string;
  categories: {[key:string]:Categories};
}

export interface Categories {
  labelName: string;
}
