import { initialState, offersReducer } from './reducer';
import { makeFakeCity, makeFakeOffer, makeFakeOffers, makeFakeReviews } from 'mocks/test-mocks';
import { changeCity, loadNearbyOffers, loadOffer, loadOfferComments, loadOffers, sendReview, sendReviewError, sendReviewSuccess, setIsOffersLoaded, sortOffers } from './action';
import { sorting } from 'const';
import { datatype } from 'faker';

const city = makeFakeCity();
const offer = makeFakeOffer();
const offers = makeFakeOffers(10);
const sortingKeys = Object.keys(sorting);
const sortingValue = sortingKeys[datatype.number(sortingKeys.length - 1)];
const reviews = makeFakeReviews();

describe('Reducer: offerReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState
    );
  });

  it('should get and filter offers', () => {
    expect(offersReducer(initialState, loadOffers(offers)))
      .toEqual({ ...initialState, OFFERS: offers, offers: offers.filter((hotel) => hotel.city.name === initialState.city.name) });
  });

  it('should change city name, location and offers', () => {
    expect(offersReducer(initialState, changeCity(city)))
      .toEqual({ ...initialState, city: city });
  });

  it('should load nearby offers', () => {
    expect(offersReducer(initialState, loadNearbyOffers(offers)))
      .toEqual({ ...initialState, nearbyOffers: offers });
  });

  it('should put true to load offers', () => {
    expect(offersReducer(initialState, setIsOffersLoaded(true)))
      .toEqual({ ...initialState, isOffersLoaded: true });
  });

  it('should sort offers', () => {
    expect(offersReducer(initialState, sortOffers(sortingValue)))
      .toEqual({ ...initialState, sorting: sortingValue });
    // нужен ли здесь switch case, как в редьюсере?
  });

  it('should load offer information', () => {
    expect(offersReducer(initialState, loadOffer(offer)))
      .toEqual({ ...initialState, offerPage: offer });
  });

  it('should load offer comments', () => {
    expect(offersReducer(initialState, loadOfferComments(reviews)))
      .toEqual({ ...initialState, offerComments: reviews });
  });

  it('should send review', () => {
    expect(offersReducer(initialState, sendReview()))
      .toEqual({ ...initialState, comment: { isPending: true, error: null, isSuccess: false } });
  });

  it('should send review success', () => {
    expect(offersReducer(initialState, sendReviewSuccess(reviews)))
      .toEqual({ ...initialState, comment: { isPending: false, error: null, isSuccess: true }, offerComments: reviews });
  });

  it('should send review error', () => {
    expect(offersReducer(initialState, sendReviewError('error')))
      .toEqual({ ...initialState, comment: { isPending: false, error: 'error', isSuccess: true } });
  });
});

