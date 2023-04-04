import { offers } from 'mocks';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity, /* fillOffersList */ } from './action';
import { defaultCity } from 'const';

const initialOffers = offers.filter((item) => item.city.name === defaultCity.name);
// можно писать здесь или переносить в константы?

const initialState = {
  city: defaultCity,
  offers: initialOffers,
};

// const { log } = console;

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, actions) => {
      if (actions.payload) {
        state.city.name = actions.payload.name;
        state.offers = offers.filter((item) => item.city.name === actions.payload.name);
        state.city.location.latitude = actions.payload.location.latitude;
        state.city.location.longitude = actions.payload.location.longitude;
      }
    });
  // .addCase(fillOffersList, (state) => {

  // });
});
