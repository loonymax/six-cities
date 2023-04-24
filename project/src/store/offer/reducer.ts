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
  isNewReviewLoaded: boolean;
  city: CityInfo;
  sorting: string;
  isOffersLoaded: boolean;
  error: string | null;
}

const initialState: Initial = {
  OFFERS: [],
  offers: [],
  offerPage: null,
  offerComments: [],
  nearbyOffers: [],
  isNewReviewLoaded: false,
  city: defaultCity,
  sorting: sorting.popular,
  isOffersLoaded: false,
  error: null,
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
        state.offerComments = actions.payload;
      })
      .addCase(setIsNewReviewLoaded, (state, actions) => {
        state.isNewReviewLoaded = actions.payload;
      });
  }
);
