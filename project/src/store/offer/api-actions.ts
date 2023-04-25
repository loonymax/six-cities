import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch, Offer, Comment, NewComment } from 'types';
import { loadOffers, setIsOffersLoaded, loadOffer, loadNearbyOffers, loadOfferComments, setIsNewReviewLoaded } from './action';
import { APIRoute } from 'const';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
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

export const fetchOffer = createAsyncThunk<void, Offer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    dispatch(setIsOffersLoaded(true));
    const [offerData, nearbyOffers, offerComments] = await Promise.all([
      api.get<Offer>(APIRoute.Offer.replace(/id/, `${id}`)),
      api.get<Offer[]>(APIRoute.NearbyOffers.replace(/id/, `${id}`)),
      api.get<Comment[]>(APIRoute.OfferComments.replace(/id/, `${id}`))
    ]);
    dispatch(setIsOffersLoaded(false));
    dispatch(loadOffer(offerData.data));
    dispatch(loadNearbyOffers(nearbyOffers.data));
    dispatch(loadOfferComments(offerComments.data));
  }
);

export const sendReviewAction = createAsyncThunk<void,
  {
    offerId: Offer['id'];
    comment: NewComment['comment'];
    rating: NewComment['rating'];
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/sendReview',
    async ({ comment, rating, offerId }, { dispatch, extra: api }) => {
      await api.post<NewComment>(APIRoute.OfferComments.replace(/id/, `${offerId}`), { comment, rating });
      dispatch(setIsNewReviewLoaded(true));
    }
  );
