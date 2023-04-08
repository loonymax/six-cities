import { OffersList, Map, Cities, SortingForm } from 'components';
import { Offer } from 'types';
import { useState } from 'react';
import { offersByCity } from 'store';
import { useSelector } from 'react-redux';
import { useAppSelector } from 'hooks';

export default function CitiesHomeScreen() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const offers = useSelector(offersByCity);

  const onOfferHover = (offerId: number | null) => {
    const currentOffer = offers.find((item) => item.id === offerId);

    setSelectedOffer(currentOffer);
  };

  const currentCity = useAppSelector((item) => item.city.city.name);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            < SortingForm />
            <div className="cities__places-list places__list tabs__content">
              <OffersList offersList={offers} onOfferHover={onOfferHover} className='cities__places-list places__list tabs__content' />
            </div>
          </section>
          <div className="cities__right-section">
            <Map selectedOffer={selectedOffer} className='cities__map map' />
          </div>
        </div>
      </div>
    </main>
  );
}
