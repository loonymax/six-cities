import { CitiesCard } from 'components';
import { Offer } from 'types';

interface Props {
  offersList: Offer[];
  onOfferHover: (offerId: number | null) => void;
  className: string;
}

export default function OffersList({ offersList, onOfferHover, className }: Props) {
  return (
    <div className={className}>
      {offersList.map((offer) => <CitiesCard key={offer.id} offer={offer} onOfferHover={onOfferHover} />)}
    </div>
  );
}
