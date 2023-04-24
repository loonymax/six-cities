import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useParams } from 'react-router-dom';
import { OfferItem, Spinner } from 'components';
import { Screen404 } from 'pages';
import { fetchOffer } from 'store/offer';


export default function OfferScreen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.offers.offerPage);
  const nearbyOffers = useAppSelector((state) => state.offers.nearbyOffers);
  const offerComments = useAppSelector((state) => state.offers.offerComments);
  const isOffersLoading = useAppSelector((state) => state.offers.isOffersLoaded);
  const isNewReviewLoaded = useAppSelector((state) => state.offers.isNewReviewLoaded);

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(Number(id)));
    }
  }, [dispatch, id, isNewReviewLoaded]);


  if (isOffersLoading) {
    return <Spinner />;
  }

  if (!offer) {
    return <Screen404 />;
  }

  return (
    <OfferItem offerData={offer} nearbyOffers={nearbyOffers} offerComments={offerComments} />
  );
}
