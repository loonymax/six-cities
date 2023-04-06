import { City} from 'components';
import { cities } from 'const';

export default function Cities() {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <li className="locations__item" key={city.name}><City cityName={city} /></li>)}
    </ul>
  );
}
