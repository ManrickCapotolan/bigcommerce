export interface BigcommerceApiResult<T> {
  data: T
}

export interface BigcommerceProduct {
  id: number;
  name: string;
  inventory_level: number;
}