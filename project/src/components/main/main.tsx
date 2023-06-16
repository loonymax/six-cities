import { OffersList, Map, SortingForm } from 'components';
import { useAppSelector } from 'hooks';
import { useCallback, useState } from 'react';
import { Offer } from 'types';

export const plural = new Intl.PluralRules('en-US');

const getTextByCount = (count: number, city: string): string => {
  const pluralRules = plural.select(count);
  switch (pluralRules) {
    case 'one':
      return `${count} place to stay in ${city}`;
    default:
      return `${count} places to stay in ${city}`;
  }
};

export default function Main() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offers = useAppSelector((state) => state.offers.offers);

  const onOfferHover = useCallback((offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  }, [offers]);

  const currentCity = useAppSelector((state) => state.offers.city.name);
  const placesFoundText = getTextByCount(offers.length, currentCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesFoundText}</b>
          <SortingForm />
          <div className="cities__places-list places__list tabs__content">
            <OffersList offersList={offers} onOfferHover={onOfferHover} className='cities__places-list places__list tabs__content' />
          </div>
        </section>
        <div className="cities__right-section">
          <Map selectedOffer={selectedOffer} offersList={offers} activeOffer={null} className='cities__map map' />
        </div>
      </div>
    </div>
  );
}
