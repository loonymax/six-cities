import { createAction } from '@reduxjs/toolkit';
import { CitiesName } from 'types';

export const changeCity = createAction<CitiesName>('city/changeCity');
export const fillOffersList = createAction('offers/fillOffersList');
