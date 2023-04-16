import { CommentForm, ReviewsList, OffersList, Map } from 'components';
import { useAppSelector } from 'hooks';
import { reviews } from 'mocks';
import { useState } from 'react';
import { Offer } from 'types';

interface Props {
  offerData: Offer;
}

export default function OfferItem({ offerData }: Props) {
  const { price, rating, type, isPremium, images, goods, description, maxAdults, bedrooms } = offerData;

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offers = useAppSelector((state) => state.offers);

  const offersList = offers.slice(0, 3);

  const onOfferHover = (offerId: number | null) => {
    const currentOffer = offersList.find((item) => item.id === offerId);

    setSelectedOffer(currentOffer);
  };

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, 6).map((image) => (
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium ? (
              <div className="property__mark">
                <span>Premium</span>
              </div>) : null}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {description}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${rating * 100 / 5}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good) => (
                  <li key={good} className="property__inside-item">
                    {good}
                  </li>))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  Angelina
                </span>
                <span className="property__user-status">
                  Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList />
              <CommentForm />
            </section>
          </div>
        </div>
        <Map selectedOffer={selectedOffer} className='property__map map' />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offersList={offersList} onOfferHover={onOfferHover} className='near-places__list places__list' />
        </section>
      </div>
    </main>
  );
}
