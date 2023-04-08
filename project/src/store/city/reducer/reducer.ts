import { createReducer } from '@reduxjs/toolkit';
import { changeCity, /* fillOffersList */ } from '../../action';
import { defaultCity } from 'const';

const initialState = {
  city: defaultCity,
};

export const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, actions) => {
      if (actions.payload) {
        state.city.name = actions.payload.name;
        state.city.location.latitude = actions.payload.location.latitude;
        state.city.location.longitude = actions.payload.location.longitude;
      }
    });
});
