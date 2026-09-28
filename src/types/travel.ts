export interface Destination {
  id: string;
  name: string;
  city: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Middle East' | 'Oceania' | 'Africa';
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImages?: string[];
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  popularActivities: string[];
  estimatedBudget: {
    backpacker: number;
    midRange: number;
    luxury: number;
  };
  recommendedHotels: {
    name: string;
    stars: number;
    pricePerNight: number;
    amenities: string[];
  }[];
  tag: string;
  featured?: boolean;
}

export interface TravelPackage {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  country: string;
  durationDays: number;
  durationNights: number;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  travelStyle: 'Luxury' | 'Adventure' | 'Cultural' | 'Honeymoon' | 'Family' | 'Wellness';
  includedActivities: string[];
  hotelInfo: {
    name: string;
    type: string;
    ratingStars: number;
    description: string;
  };
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  tripTaken: string;
  comment: string;
}

export interface BookingRequest {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  destinationOrPackageId: string;
  itemType: 'destination' | 'package';
  itemTitle: string;
  startDate: string;
  guests: number;
  roomType: 'standard' | 'deluxe' | 'suite';
  flightIncluded: boolean;
  specialRequests?: string;
  totalPrice: number;
  status?: 'confirmed' | 'pending';
  createdAt?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  destinationPreference?: string;
  message: string;
  createdAt?: string;
}
