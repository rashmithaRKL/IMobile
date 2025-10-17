import { Product } from '@/types/product';
import phone1 from '@/assets/phone1.png';
import phone2 from '@/assets/phone2.png';
import phone3 from '@/assets/phone3.png';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    originalPrice: 1299,
    condition: 'new',
    category: 'smartphone',
    image: phone1,
    images: [phone1, phone1, phone1],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    description: 'The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.',
    specifications: {
      display: '6.7" Super Retina XDR',
      processor: 'A17 Pro',
      ram: '8GB',
      storage: '256GB',
      battery: '4441 mAh',
      camera: '48MP + 12MP + 12MP',
      os: 'iOS 17'
    }
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1099,
    condition: 'new',
    category: 'smartphone',
    image: phone2,
    images: [phone2, phone2, phone2],
    rating: 4.8,
    reviews: 189,
    inStock: true,
    description: 'Premium flagship with S Pen, stunning AMOLED display, and AI-powered features.',
    specifications: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12GB',
      storage: '512GB',
      battery: '5000 mAh',
      camera: '200MP + 50MP + 12MP + 10MP',
      os: 'Android 14'
    }
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 899,
    condition: 'new',
    category: 'smartphone',
    image: phone3,
    images: [phone3, phone3, phone3],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    description: 'Best Android camera phone with Google Tensor G3 and AI features.',
    specifications: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G3',
      ram: '12GB',
      storage: '256GB',
      battery: '5050 mAh',
      camera: '50MP + 48MP + 48MP',
      os: 'Android 14'
    }
  },
  {
    id: '4',
    name: 'iPhone 14 (Used)',
    brand: 'Apple',
    price: 649,
    originalPrice: 799,
    condition: 'used',
    category: 'smartphone',
    image: phone1,
    rating: 4.6,
    reviews: 89,
    inStock: true,
    description: 'Excellent condition used iPhone 14 with 6 months warranty.',
    specifications: {
      display: '6.1" Super Retina XDR',
      processor: 'A15 Bionic',
      ram: '6GB',
      storage: '128GB',
      battery: '3279 mAh',
      camera: '12MP + 12MP',
      os: 'iOS 17'
    }
  },
  {
    id: '5',
    name: 'Wireless Earbuds Pro',
    brand: 'Generic',
    price: 79,
    condition: 'new',
    category: 'accessory',
    image: phone3,
    rating: 4.5,
    reviews: 423,
    inStock: true,
    description: 'Premium wireless earbuds with active noise cancellation and 30-hour battery life.'
  },
  {
    id: '6',
    name: 'Fast Charger 65W',
    brand: 'Generic',
    price: 29,
    condition: 'new',
    category: 'accessory',
    image: phone2,
    rating: 4.7,
    reviews: 567,
    inStock: true,
    description: 'Universal fast charger compatible with most smartphones.'
  },
  {
    id: '7',
    name: 'iPhone Screen Replacement',
    brand: 'Apple',
    price: 149,
    condition: 'new',
    category: 'parts',
    image: phone1,
    rating: 4.8,
    reviews: 89,
    inStock: true,
    description: 'Original quality iPhone screen replacement with installation service available.'
  },
  {
    id: '8',
    name: 'Samsung Display AMOLED',
    brand: 'Samsung',
    price: 129,
    condition: 'new',
    category: 'parts',
    image: phone2,
    rating: 4.6,
    reviews: 67,
    inStock: true,
    description: 'High-quality AMOLED display replacement for Samsung Galaxy series.'
  }
];
