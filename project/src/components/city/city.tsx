import { useAppDispatch, useAppSelector } from 'hooks';
import { changeCity } from 'store';
import { CityInfo } from 'types';

interface Props {
  cityName: CityInfo;
}

export default function City({ cityName }: Props) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.city.name);

  return (
    <a className={`locations__item-link tabs__item ${cityName.name === currentCity ? ' tabs__item--active' : ''}`} href="/#" onClick={() => dispatch(changeCity(cityName))}>
      <span>{cityName.name}</span>
    </a>
  );
}

