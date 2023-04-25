import { createReducer } from '@reduxjs/toolkit';
import { defaultCity, sorting } from 'const';
import { CityInfo, Comment, Offer } from 'types';
import { changeCity, loadNearbyOffers, loadOffer, loadOfferComments, loadOffers, setIsNewReviewLoaded, setIsOffersLoaded, sortOffers } from './action';

interface Initial {
  OFFERS: Offer[];
  offers: Offer[];
  offerPage: Offer | null;
  offerComments: Comment[];
  nearbyOffers: Offer[];
  city: CityInfo;
  sorting: string;
  isOffersLoaded: boolean;
  error: string | null;
  isNewReviewLoaded: boolean;
}

const initialState: Initial = {
  OFFERS: [],
  offers: [],
  offerPage: null,
  offerComments: [],
  nearbyOffers: [],
  city: defaultCity,
  sorting: sorting.popular,
  isOffersLoaded: false,
  error: null,
  isNewReviewLoaded: false,
};

export const offersReducer = createReducer(
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
      .addCase(loadNearbyOffers, (state, actions) => {
        state.nearbyOffers = actions.payload;
      })
      .addCase(setIsOffersLoaded, (state, actions) => {
        state.isOffersLoaded = actions.payload;
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
      .addCase(loadOfferComments, (state, actions) => {
        state.offerComments = actions.payload.sort((a, b) => {
          if (a.date < b.date) {
            return 1;
          }
          return -1;
        }).slice(0, 10);
      })
      .addCase(setIsNewReviewLoaded, (state, actions) => {
        state.isNewReviewLoaded = actions.payload;
      });
  }
);
