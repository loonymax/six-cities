import { createReducer } from '@reduxjs/toolkit';
import { sortOffers, sortToggler } from 'store/action';
import { sorting } from 'const';

const initialState = {
  select: sorting.popular,
  isOpened: false,
};

export const sortReducer = createReducer(
  initialState, (builder) => {
    builder
      .addCase(sortOffers, (state, actions) => {
        if (actions.payload) {
          state.select = actions.payload;
        }
      })
      .addCase(sortToggler, (state, actions) => {
        if (actions.payload) {
          state.isOpened = actions.payload;
        }
      });
  });
