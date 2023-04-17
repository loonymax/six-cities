import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchOffer } from 'store';
import { useParams } from 'react-router-dom';
import { OfferItem, Spinner } from 'components';
import { Screen404 } from 'pages';


export default function OfferScreen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.offerPage);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const offerComments = useAppSelector((state) => state.offerComments);
  const isOffersLoaded = useAppSelector((state) => state.isOffersLoaded);

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(Number(id)));
    }
  }, [dispatch, id]);

  if (!offer || isOffersLoaded) {
    return <Spinner />;
  }

  if (!id) {
    return <Screen404 />;
  }

  return (
    <OfferItem offerData={offer} nearbyOffers={nearbyOffers} offerComments={offerComments} />
  );
}
