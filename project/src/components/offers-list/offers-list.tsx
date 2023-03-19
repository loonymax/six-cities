import { CitiesCard } from 'components';
import { Offer } from 'mocks/offers';

interface Props {
  offersList: Offer[];
}

export default function OffersList({ offersList }: Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => <CitiesCard key={item.id} offer={item} />)}
    </div>
  );
}
