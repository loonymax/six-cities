import { useAppSelector } from 'hooks';
import { Helmet } from 'react-helmet-async';

export default function Empty(): JSX.Element {
  const selectedCity = useAppSelector((state) => (state.offers.city.name));

  return (
    <>
      <Helmet>
        <title>Предложений нет</title>
      </Helmet>
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {selectedCity}</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </>
  );
}
