export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  turnaroundTime: string;
  estimatedPrice: string;
  iconName: string;
  badge?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'laptops' | 'desktops' | 'monitors' | 'networking' | 'accessories' | 'components';
  categoryLabel: string;
  priceGMD: number;
  condition: 'Brand New' | 'Certified Refurbished' | 'OEM Original';
  shortDesc: string;
  specs: string[];
  image: string;
  inStock: boolean;
  featured?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'setups' | 'repairs' | 'accessories' | 'desktops' | 'networking' | 'activities';
  categoryLabel: string;
  description: string;
  image: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  deviceType: string;
  serviceCategory: string;
  description: string;
  urgency: 'Standard (1-2 days)' | 'Express (Same Day)' | 'Emergency';
}
