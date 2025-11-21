export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'drink' | 'food' | 'merch';
  image: string;
  popular?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}