import { createAction } from '@reduxjs/toolkit';
import { Offer, CityInfo, Comment } from 'types';
import { AuthorizationStatus } from 'const';

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');
export const loadOfferComments = createAction<Comment[]>('data/loadOfferComments');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');

export const changeCity = createAction<CityInfo>('city/changeCity');

export const sortOffers = createAction<string>('offers/sortOffers');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');

