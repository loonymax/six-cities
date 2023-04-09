import { sorting } from 'const';
import { useAppSelector } from 'hooks';
import classNames from 'classnames';
import { useState } from 'react';

const sortingValues = Object.values(sorting);

export default function SortingForm() {
  const [isOpened] = useState(false);
  const select = useAppSelector((state) => state.select);

  return (
    <form className="places__sorting" action="/#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {select}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options ', 'places__options--custom', {'places__options--opened': isOpened === true})}>
        {sortingValues.map((value) => <li key={value} className={classNames('places__option', {'places__option--active': select === value})} tabIndex={0}>{value}</li>)}
      </ul>
    </form>
  );
}
