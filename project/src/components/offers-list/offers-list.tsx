import { CitiesCard, Spinner } from 'components';
import { Offer } from 'types';
import { useAppSelector } from 'hooks';

interface Props {
  offersList: Offer[];
  onOfferHover: (offerId: number | null) => void;
  className: string;
}

export default function OffersList({ offersList, onOfferHover, className }: Props) {
  const isOffersLoaded = useAppSelector((state) => state.offers.isOffersLoaded);

  return (
    <div className={className}>
      {isOffersLoaded ?
        <Spinner /> :
        offersList.map((offer) => <CitiesCard key={offer.id} offer={offer} onOfferHover={onOfferHover} />)}
    </div>
  );
}
