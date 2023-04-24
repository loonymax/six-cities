import { useAppDispatch, useAppSelector } from 'hooks';
import { CityInfo } from 'types';
import { default as classNames } from 'classnames';
import { changeCity } from 'store/offer';

interface Props {
  cityName: CityInfo;
}

export default function City({ cityName }: Props) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((item) => item.offers.city.name);

  const handleCityChange = () => {
    dispatch(changeCity(cityName));
  };

  return (
    <a className={classNames('locations__item-link', 'tabs__item', { 'tabs__item--active': cityName.name === currentCity })} href="/#" onClick={handleCityChange}>
      <span>{cityName.name}</span>
    </a>
  );
}
