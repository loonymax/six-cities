import { Offer } from 'mocks/offers';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from 'const';

interface Props {
  offer: Offer;
}

const createPremium = (premium: boolean) => {
  if (premium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
};

export default function CitiesCard({ offer }: Props) {
  const { title, price, rating, type, previewImage, isPremium, id } = offer;

  const [, setActiveCard] = useState<Offer | null>();

  const ratingBar = `${rating * 100 / 5}%`;

  const handleMouseEnter = () => {
    setActiveCard(offer);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <article className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {createPremium(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}${id}`} key={id}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place interior" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingBar }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
