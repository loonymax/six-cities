export interface Offer {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: [string];
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface Rating {
  title: string;
  value: number;
  id: string;
}

export interface Review {
  id: number;
  image: string;
  userName: string;
  rating: string;
  text: string;
  date: string;
  dateTime: string;
}

export interface CityInfo {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
