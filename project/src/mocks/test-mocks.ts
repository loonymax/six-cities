import { CityInfo, Comment, Offer, UserData } from 'types';
import { datatype, image, internet } from 'faker';
import { cities } from 'const';

export const makeFakeCity = (): CityInfo => ({
  location: {
    latitude: datatype.float(0.01),
    longitude: datatype.float(0.01),
  },
  name: cities[datatype.number(cities.length - 1)].name,
});

export const makeFakeOffer = (): Offer => ({
  bedrooms: datatype.number(100),
  city: {
    location: {
      latitude: datatype.float(0.01),
      longitude: datatype.float(0.01),
      zoom: datatype.number(13),
    },
    name: cities[datatype.number(cities.length - 1)].name,
  },
  description: datatype.string(),
  goods: Array.from({ length: datatype.number(10) }, () => datatype.string()),
  host: {
    avatarUrl: image.avatar(),
    id: datatype.number(100),
    isPro: datatype.boolean(),
    name: datatype.string(),
  },
  id: datatype.number(100),
  images: Array.from({ length: datatype.number(10) }, () => image.abstract()),
  isPremium: datatype.boolean(),
  location: {
    latitude: datatype.float(0.01),
    longitude: datatype.float(0.01),
    zoom: datatype.number(13),
  },
  maxAdults: datatype.number(30),
  previewImage: datatype.string(),
  price: datatype.number(),
  rating: datatype.number(5),
  title: datatype.string(),
  type: datatype.string(),
});

export const makeFakeOffers = (length = 10) => {
  const offers = Array.from({ length: length }, () => makeFakeOffer());
  return offers;
};

export const makeFakeReview = (): Comment => ({
  comment: datatype.string(),
  date: datatype.string(),
  id: datatype.number(),
  rating: datatype.number(5),
  user: {
    avatarUrl: image.avatar(),
    id: datatype.number(100),
    isPro: datatype.boolean(),
    name: datatype.string(),
  },
});

export const makeFakeReviews = (length = 5): Comment[] => {
  const reviews = Array.from({ length: length }, () => makeFakeReview());
  return reviews;
};

export const makeFakeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.string(),
  name: internet.userName(),
  avatarUrl: image.imageUrl(),
});
