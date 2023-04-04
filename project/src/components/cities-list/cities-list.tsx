import { CitiesItem } from 'components';
import { citiesNames } from 'const';

export default function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
      {citiesNames.map((item) => <li className="locations__item" key={item.name}><CitiesItem cityName={item} /></li>)}
    </ul>
  );
}
