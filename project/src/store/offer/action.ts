import { createAction } from '@reduxjs/toolkit';
import { CityInfo, Comment, Offer } from 'types';

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const changeCity = createAction<CityInfo>('city/changeCity');
export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');
export const sortOffers = createAction<string>('offers/sortOffers');

export const loadOfferComments = createAction<Comment[]>('data/loadOfferComments');
export const setIsNewReviewLoaded = createAction<boolean>('data/setIsNewReviewLoaded');
