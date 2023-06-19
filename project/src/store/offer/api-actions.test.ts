import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from 'services/api';
import { APIRoute } from 'const';
import { State } from 'types';
import { makeFakeOffers } from 'mocks/test-mocks';
import { fetchOffersAction } from './api-actions';
import { loadOffers, setIsOffersLoaded } from './action';

const offers = makeFakeOffers();
const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore();

describe('Async actions', () => {
  it('should fetchOffersAction when server returns 200', async () => {
    mockAPI.onGet(APIRoute.Offers).reply(200, offers);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      setIsOffersLoaded(true),
      setIsOffersLoaded(false),
      loadOffers(offers),
    ]);
  });
});
