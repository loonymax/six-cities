import { combineReducers } from '@reduxjs/toolkit';
import { offersReducer } from './offer';
import { userReducer } from './user/reducer';

export const reducer = combineReducers({
  offers: offersReducer,
  user: userReducer,
});
