import { CityInfo } from 'types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*',
}

export const MapPins = {
  DefaultPin: './img/pin.svg',
  ActivePin: './img/pin-active.svg',
};

export const defaultCity: CityInfo = {
  'location': {
    'latitude': 48.8534100,
    'longitude': 2.3488000,
  },
  'name': 'Paris'
};

export const sorting = {
  popular: 'Popular',
  low: 'Price: low to high',
  high: 'Price: high to low',
  top: 'Top rated first',
};

export const cities: CityInfo[] = [
  {
    'name': 'Paris',
    'location': {
      'latitude': 48.8534100,
      'longitude': 2.3488000,
    }
  },
  {
    'name': 'Cologne',
    'location': {
      'latitude': 50.9333000,
      'longitude': 6.9500000,
    }
  },
  {
    'name': 'Brussels',
    'location': {
      'latitude': 50.8504000,
      'longitude': 4.3487800,
    }
  },
  {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.939309666406198,
    }
  },
  {
    'name': 'Hamburg',
    'location': {
      'latitude': 53.5753200,
      'longitude': 10.0153400,
    }
  },
  {
    'name': 'Dusseldorf',
    'location': {
      'latitude': 51.2217200,
      'longitude': 6.7761600,
    }
  },
];
