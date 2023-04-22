import { Rating, CityInfo } from 'types';

export const ratingStars: Rating[] = [
  {
    title: 'perfect',
    value: 5,
    id: '5-stars',
  },
  {
    title: 'good',
    value: 4,
    id: '4-stars',
  },
  {
    title: 'not bad',
    value: 3,
    id: '3-stars',
  },
  {
    title: 'badly',
    value: 2,
    id: '2-stars',
  },
  {
    title: 'terribly',
    value: 1,
    id: '1-stars',
  }
];

export const city: CityInfo = {
  name: 'Paris',
  location: {
    'latitude': 52.370216,
    'longitude': 4.895168,
  }
};

//   {
//     'bedrooms': 3,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.85309666406198,
//         'zoom': 10
//       },
//       'name': 'Amsterdam'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 1,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 1,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': true,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.85709666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-01.jpg',
//     'price': 110,
//     'rating': 4.0,
//     'title': 'Beautiful & luxurious studio at great location',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 5,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.85309666406198,
//         'zoom': 10
//       },
//       'name': 'Amsterdam'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/3.png',
//       'id': 2,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 2,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.85309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/room.jpg',
//     'price': 100,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious studio at great',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 1,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.929309666406198,
//         'zoom': 10
//       },
//       'name': 'Amsterdam'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 3,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 3,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': true,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.929309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-02.jpg',
//     'price': 10,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious studio at',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Amsterdam'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 4,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 4,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Dusseldorf'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 5,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 5,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Brussels'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 6,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 6,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Brussels'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 7,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 7,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Brussels'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 8,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 8,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Cologne'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 9,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 9,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Paris'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 10,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 10,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
//   {
//     'bedrooms': 10,
//     'city': {
//       'location': {
//         'latitude': 52.3909553943508,
//         'longitude': 4.939309666406198,
//         'zoom': 10
//       },
//       'name': 'Paris'
//     },
//     'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
//     'goods': [
//       'Heating'
//     ],
//     'host': {
//       'avatarUrl': 'img/1.png',
//       'id': 11,
//       'isPro': true,
//       'name': 'Angelina'
//     },
//     'id': 11,
//     'images': [
//       'img/1.png'
//     ],
//     'isPremium': false,
//     'location': {
//       'latitude': 52.3909553943508,
//       'longitude': 4.939309666406198,
//       'zoom': 8
//     },
//     'maxAdults': 4,
//     'previewImage': 'img/apartment-03.jpg',
//     'price': 120,
//     'rating': 4.8,
//     'title': 'Beautiful & luxurious',
//     'type': 'apartment'
//   },
// ];

