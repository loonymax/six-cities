import { useAppDispatch, useAppSelector } from 'hooks';
import { changeCity } from 'store';
import { CitiesName } from 'types';

interface Props {
  cityName: CitiesName;
}

export default function CitiesItem({ cityName }: Props) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.city.name);

  if (cityName.name === currentCity) {
    return (
      <a className="locations__item-link tabs__item tabs__item--active" href="/#" onClick={() => dispatch(changeCity(cityName))}>
        <span>{cityName.name}</span>
      </a>
    );
  }

  return (
    <a className="locations__item-link tabs__item" href="/#" onClick={() => dispatch(changeCity(cityName))}>
      <span>{cityName.name}</span>
    </a>
  );
}
