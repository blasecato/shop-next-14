export type IProduct = {
  id: string;
  name: string;
  price: number;
  weight: number;
  description: string;
  image: string;
  categoryId: number;
};

export type ICategoty = {
  id: number;
  name: string;
  icon: string;
  products: IProduct[];
};

export type CategotyProps = {
  category: ICategoty;
};

export type Provider = {
  children: React.ReactNode;
};

export type IOrder = {
  id: string;
  name: string;
  price: number;
  weight: number;
  description: string;
  image: string;
  categoryId: number;
  amount: number;
};
