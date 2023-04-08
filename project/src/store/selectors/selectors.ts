import { createSelector } from '@reduxjs/toolkit';
import { State } from 'types/state';
import { sorting } from 'const';

// const { log } = console;

const offersSelector = (state: State) => state.offers.offers;
const citySelector = (state: State) => state.city.city.name;
const sortSelector = (state: State) => state.sort;

export const offersByCity = createSelector(
  offersSelector, citySelector,
  (offers, cityName) => offers.filter((offer) => offer.city.name === cityName));

export const sortOffers = createSelector(
  sortSelector, offersSelector,
  (sort, offers) => {
    offers = offers.slice();
    offers.sort((a, b) => {
      switch (sort.select) {
        case sorting.high:
          return a.price - b.price;
        case sorting.low:
          return b.price - a.price;
        case sorting.top:
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  });
