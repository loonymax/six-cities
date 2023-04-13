import { createAction } from '@reduxjs/toolkit';
import { Offer, CityInfo } from 'types';

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const changeCity = createAction<CityInfo>('city/changeCity');
export const sortOffers = createAction<string>('offers/sortOffers');
export const setIsOffersLoaded = createAction<boolean>('data/setIsOffersLoaded');

