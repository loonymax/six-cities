import { Cities, Empty, Main } from 'components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchOffersAction } from 'store/offer';

export default function CitiesHomeScreen() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers.offers);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Cities />
        </section>
      </div>
      {offers.length ? <Main /> : <Empty />}
    </main>
  );
}
