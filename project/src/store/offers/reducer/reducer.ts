import { offers } from 'mocks';
import { createReducer } from '@reduxjs/toolkit';
import { fillOffersList } from 'store/action';

const initialState = {
  offers: offers,
};

export const offersReducer = createReducer(
  initialState, (builder) => {
    builder
      .addCase(fillOffersList, (state, actions) => {
        if (actions.payload) {
          state.offers = actions.payload;
        }
      });
  });
