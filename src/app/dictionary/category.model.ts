export interface KeyNamePair {
  key: string;
  name: string;
}

export interface Category extends KeyNamePair {
  products: KeyNamePair[];
}

export interface Option {
  label: string;
  value: string;
  options?: Option[];
}
