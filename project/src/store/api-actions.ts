import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch, Offer } from 'types';
import { loadOffers, setIsOffersLoaded } from './action';
import { APIRoute } from 'const';

export const fetchQuestionAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsOffersLoaded(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setIsOffersLoaded(false));
    dispatch(loadOffers(data));
  },
);

