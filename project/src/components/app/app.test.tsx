import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from 'components/history-router/history-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import App from './app';
import { AppRoute, AuthorizationStatus } from 'const';
import { render, screen } from '@testing-library/react';
import { InitialUserState } from 'store/user/reducer';
import { InitialOffersState } from 'store/offer/reducer';
import { makeFakeCity, makeFakeOffer, makeFakeOffers, makeFakeReviews, makeFakeUserData } from 'mocks/test-mocks';
import { sorting } from 'const';
import { createAPI } from 'services';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { State } from 'types';
import { Action } from '@reduxjs/toolkit';

const offers = makeFakeOffers(10);
const offer = makeFakeOffer();
const nearbyOffers = makeFakeOffers(3);
const reviews = makeFakeReviews();
const city = makeFakeCity();
const user = makeFakeUserData();

const mockUserState: InitialUserState = {
  authorizationStatus: AuthorizationStatus.Auth,
  error: null,
  name: user.name,
  avatar: user.avatarUrl,
};

const mockOffersState: InitialOffersState = {
  OFFERS: offers,
  offers: offers,
  offerPage: offer,
  offerComments: reviews,
  nearbyOffers: nearbyOffers,
  city: city,
  sorting: sorting.popular,
  isOffersLoaded: false,
  error: null,
  comment: {
    isPending: false,
    error: null,
    isSuccess: false,
  }
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
State,
Action<string>,
ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  offers: mockOffersState,
  user: mockUserState,
});

const history = createMemoryHistory();

window.scrollTo = jest.fn();
Element.prototype.scrollTo = jest.fn();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "CitiesHomeScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);
    expect(screen.getByText('Cities')).toBeInTheDocument();
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Cologne')).toBeInTheDocument();
    expect(screen.getByText('Brussels')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
    expect(screen.getByText('Dusseldorf')).toBeInTheDocument();
  });
});
