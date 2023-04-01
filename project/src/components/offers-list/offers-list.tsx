import { CitiesCard } from 'components';
import { Offer } from 'interfaces';

interface Props {
  offersList: Offer[];
  onOfferHover: (offerId: number | null) => void;
  className: string;
}

export default function OffersList({ offersList, onOfferHover, className }: Props) {
  return (
    <div className={className}>
      {offersList.map((item) => <CitiesCard key={item.id} offer={item} onOfferHover={onOfferHover} />)}
    </div>
  );
}
