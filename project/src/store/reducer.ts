import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers, loadOffers, loadOffer, changeAuthorizationStatus } from './action';
import { defaultCity, sorting, AuthorizationStatus } from 'const';
import { Offer, CityInfo } from 'types';

interface initial {
  OFFERS: Offer[];
  offers: Offer[];
  offerPage: Offer | null;
  city: CityInfo;
  sorting: string;
  isOffersLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: initial = {
  OFFERS: [],
  offers: [],
  offerPage: null ,
  city: defaultCity,
  sorting: sorting.popular,
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(
  initialState, (builder) => {
    builder
      .addCase(loadOffers, (state, actions) => {
        if (actions.payload) {
          state.OFFERS = actions.payload;
          state.offers = state.OFFERS.filter((offer) => offer.city.name === state.city.name);
        }
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
          state.sorting = actions.payload;

          state.offers.sort((a, b) => {
            switch (state.sorting) {
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
      })
      .addCase(loadOffer, (state, actions) => {
        state.offerPage = actions.payload;
      })
      .addCase(changeAuthorizationStatus, (state, actions) => {
        state.authorizationStatus = actions.payload;
      });
  });
