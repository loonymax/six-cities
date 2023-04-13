import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers, loadOffers } from './action';
import { defaultCity, sorting } from 'const';
import { Offer, CityInfo } from 'types';

interface initial {
  OFFERS: Offer[];
  offers: Offer[];
  city: CityInfo;
  select: string;
  isOffersLoaded: boolean;
}

const initialState: initial = {
  OFFERS: [],
  offers: [],
  city: defaultCity,
  select: sorting.popular,
  isOffersLoaded: false,
};

export const reducer = createReducer(
  initialState, (builder) => {
    builder
      .addCase(loadOffers, (state, actions) => {
        state.OFFERS = actions.payload;
        state.offers = state.OFFERS.filter((offer) => offer.city.name === state.city.name);
      })
      .addCase(changeCity, (state, actions) => {
        if (actions.payload) {
          state.city.name = actions.payload.name;
          state.city.location.latitude = actions.payload.location.latitude;
          state.city.location.longitude = actions.payload.location.longitude;
          state.offers = state.OFFERS.filter((offer) => offer.city.name === state.city.name);
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
