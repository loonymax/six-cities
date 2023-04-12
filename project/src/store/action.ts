import { createAction } from '@reduxjs/toolkit';
import { Offer, CityInfo } from 'types';

export const loadOffers = createAction<Offer[]>('offers/loadOffers');
export const changeCity = createAction<CityInfo>('city/changeCity');
export const fillOffersList = createAction('offers/fillOffersList');
export const sortOffers = createAction<string>('offers/sortOffers');

