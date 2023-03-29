import { CitiesCard } from 'components';
import { Offer } from 'interfaces';
import { classNames } from 'const';

interface Props {
  offersList: Offer[];
  onOfferHover: (offerId: number | null) => void;
  className: string;
}

export default function OffersList({ offersList, onOfferHover, className }: Props) {
  if (className === classNames.HomeScreenOffersList) {
    return (
      <div className={className}>
        {offersList.map((item) => <CitiesCard key={item.id} offer={item} onOfferHover={onOfferHover} />)}
      </div>
    );
  }

  return (
    <div className={className}>
      {offersList.slice(0, 3).map((item) => <CitiesCard key={item.id} offer={item} onOfferHover={onOfferHover} />)}
    </div>
  );
}
