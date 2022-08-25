export interface IProduct {
  id: number;
  image: string;
  name: string;
  brand: string;
  price: number;
  inStock: boolean;
}

export interface ICart {
  cart: IProduct[];
}
