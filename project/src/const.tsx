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

