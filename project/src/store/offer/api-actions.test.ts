import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from 'services/api';
import { APIRoute } from 'const';
import { State } from 'types';
import { makeFakeNewReview, makeFakeOffers, makeFakeReviews } from 'mocks/test-mocks';
import { fetchOffer, fetchOffersAction, sendReviewAction } from './api-actions';
import { loadNearbyOffers, loadOffer, loadOfferComments, loadOffers, sendReview, sendReviewError, sendReviewSuccess, setIsOffersLoaded } from './action';
import { makeFakeOffer } from 'mocks/test-mocks';
import { datatype } from 'faker';

const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

const offer = makeFakeOffer();
const offers = makeFakeOffers();
const nearbyOffers = makeFakeOffers(3);
const offerId = datatype.number(100);
const reviews = makeFakeReviews();
const newReview = makeFakeNewReview();

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('Async actions', () => {
  it('should fetchOffersAction when server returns 200', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Offers).reply(200, offers);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      setIsOffersLoaded.type,
      setIsOffersLoaded.type,
      loadOffers.type,
      fetchOffersAction.fulfilled.type,
    ]);
  });

  it('should fetchOffersAction when server returns 400', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Offers).reply(400, offers);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      setIsOffersLoaded.type,
      fetchOffersAction.rejected.type,
    ]);
  });

  it('should fetchOffer when server return 200', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Offer.replace(/id/, `${offerId}`)).reply(200, offer);
    mockAPI.onGet(APIRoute.NearbyOffers.replace(/id/, `${offerId}`)).reply(200, nearbyOffers);
    mockAPI.onGet(APIRoute.OfferComments.replace(/id/, `${offerId}`)).reply(200, reviews);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffer(offerId));
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffer.pending.type,
      setIsOffersLoaded.type,
      setIsOffersLoaded.type,
      loadOffer.type,
      loadNearbyOffers.type,
      loadOfferComments.type,
      fetchOffer.fulfilled.type,
    ]);
  });

  it('should fetchOffer when server return 400', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Offer.replace(/id/, `${offerId}`)).reply(400, offer);
    mockAPI.onGet(APIRoute.NearbyOffers.replace(/id/, `${offerId}`)).reply(400, nearbyOffers);
    mockAPI.onGet(APIRoute.OfferComments.replace(/id/, `${offerId}`)).reply(400, reviews);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffer(offerId));
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffer.pending.type,
      setIsOffersLoaded.type,
      fetchOffer.rejected.type,
    ]);
  });

  it('should sendReviewAction when server return 200', async () => {
    const store = mockStore();

    mockAPI.onPost(APIRoute.OfferComments.replace(/id/, `${offerId}`)).reply(200, reviews);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(sendReviewAction({ offerId: offerId, comment: newReview.comment, rating: newReview.rating }));
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendReviewAction.pending.type,
      sendReview.type,
      sendReviewSuccess.type,
      sendReviewAction.fulfilled.type,
    ]);
  });

  it('should sendReviewAction when server return 400', async () => {
    const store = mockStore();

    mockAPI.onPost(APIRoute.OfferComments.replace(/id/, `${offerId}`)).reply(400, reviews);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(sendReviewAction({ offerId: offerId, comment: newReview.comment, rating: newReview.rating }));
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendReviewAction.pending.type,
      sendReview.type,
      sendReviewError.type,
      sendReviewAction.fulfilled.type,
    ]);
  });
});
