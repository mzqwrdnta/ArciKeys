export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  colors: string[];
}

export interface CartItem extends Product {
  selectedColor: string;
  quantity: number;
}

export interface CustomerForm {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

export type PageView = 'HOME' | 'STORE';

export interface Feedback {
  id: number;
  name: string;
  message: string;
  date: string;
}