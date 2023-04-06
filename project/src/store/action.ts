import { createAction } from '@reduxjs/toolkit';
import { CityInfo } from 'types';

export const changeCity = createAction<CityInfo>('city/changeCity');
export const fillOffersList = createAction('offers/fillOffersList');
