import { createAction } from '@reduxjs/toolkit';
import { Offer, CityInfo } from 'types';
import { AuthorizationStatus } from 'const';

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const changeCity = createAction<CityInfo>('city/changeCity');
export const sortOffers = createAction<string>('offers/sortOffers');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('login/changeAuthorizationStatus');

