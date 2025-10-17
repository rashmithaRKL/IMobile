export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  condition: 'new' | 'used';
  category: 'smartphone' | 'accessory' | 'parts';
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  specifications?: {
    display?: string;
    processor?: string;
    ram?: string;
    storage?: string;
    battery?: string;
    camera?: string;
    os?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutData {
  fullName: string;
  email: string;
  whatsapp: string;
  alternateNumber?: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  paymentMethod: 'cod' | 'book';
}
