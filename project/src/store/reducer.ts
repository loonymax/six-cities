import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers, loadOffers } from './action';
import { defaultCity, sorting } from 'const';
import { Offer, CityInfo } from 'types';

// const initialOffers = offers.filter((item) => item.city.name === defaultCity.name);

interface initial {
  offers: Offer[];
  city: CityInfo;
  select: string;
}

const initialState: initial = {
  offers: [],
  city: defaultCity,
  select: sorting.popular,
};

export const reducer = createReducer(
  initialState, (builder) => {
    builder
      .addCase(loadOffers, (state, actions) => {
        if (actions.payload) {
          state.offers = actions.payload;
        }
      })
      .addCase(changeCity, (state, actions) => {
        if (actions.payload) {
          state.city.name = actions.payload.name;
          state.city.location.latitude = actions.payload.location.latitude;
          state.city.location.longitude = actions.payload.location.longitude;
          state.offers = state.offers.filter((item) => item.city.name === actions.payload.name);
        }
      })
      .addCase(sortOffers, (state, actions) => {
        if (actions.payload) {
          state.select = actions.payload;

          state.offers.sort((a, b) => {
            switch (state.select) {
              case sorting.high:
                return b.price - a.price;
              case sorting.low:
                return a.price - b.price;
              case sorting.top:
                return b.rating - a.rating;
              default:
                return 0;
            }
          });
        }
      });
  });
