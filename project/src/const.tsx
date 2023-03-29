export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*',
}
// верно ли написано? объект вместо enum
export const mapPins = {
  DefaultPin: './img/pin.svg',
  ActivePin: './img/pin-active.svg',
};

export const classNames = {
  HomeScreenOffersList: 'cities__places-list places__list tabs__conten',
  OfferScreenOffersList: 'near-places__list places__list',
  HomeScreemMap: 'cities__map map',
  OfferScreenMap: 'property__map map',
};
