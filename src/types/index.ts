export interface Car {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: 'economy' | 'comfort' | 'business' | 'suv' | 'minivan';
  transmission: 'automatic' | 'manual';
  fuelType: 'petrol' | 'diesel' | 'hybrid' | 'electric';
  seats: number;
  pricePerDay: number;
  deposit: number;
  image: string;
  features: string[];
  available: boolean;
  rating: number;
  reviewCount: number;
}

export interface BookingFormData {
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  name: string;
  phone: string;
  email: string;
  carId?: number;
}

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  carName?: string;
}
