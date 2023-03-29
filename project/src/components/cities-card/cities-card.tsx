import { Offer } from 'interfaces';
import { Link } from 'react-router-dom';
import { useState, MouseEvent } from 'react';
import { AppRoute } from 'const';
import { Premium } from 'components';

interface Props {
  offer: Offer;
  onOfferHover: (offerId: number | null) => void;
}

export default function CitiesCard({ offer, onOfferHover }: Props) {
  const { title, price, rating, type, previewImage, isPremium, id } = offer;

  const [, setActiveCard] = useState<Offer | null>(); // это можно убирать?

  const ratingBar = `${rating * 100 / 5}%`;

  const handleMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onOfferHover(id);

    setActiveCard(offer); // это можно убирать?
  };

  const handleMouseLeave = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onOfferHover(null);

    setActiveCard(null); // это можно убирать?
  };

  return (
    <article className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ? <Premium /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link key={id} to={AppRoute.Offer.replace(/:id/, `${id}`)}>
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
    </article >
  );
}
