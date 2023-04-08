import { useAppDispatch, useAppSelector } from 'hooks';
import { changeCity } from 'store';
import { CityInfo } from 'types';
import { default as classNames } from 'classnames';

interface Props {
  cityName: CityInfo;
}

export default function City({ cityName }: Props) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.city.city.name);

  return (
    <a className={classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': cityName.name === currentCity })} href="/#" onClick={() => dispatch(changeCity(cityName))}>
      <span>{cityName.name}</span>
    </a>
  );
}
