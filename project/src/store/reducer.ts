import { cityReducer } from './city/reducer/reducer';
import { offersReducer } from './offers/reducer/reducer';
import { combineReducers } from '@reduxjs/toolkit';
import { sortReducer } from './sort/reducer';

export default combineReducers({
  city: cityReducer,
  offers: offersReducer,
  sort: sortReducer,
});
