import { sorting } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import classNames from 'classnames';
import { MouseEvent, useState } from 'react';
import { sortOffers } from 'store';

const sortingValues = Object.values(sorting);

export default function SortingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const select = useAppSelector((state) => state.select);
  const dispatch = useAppDispatch();

  const handleSortingChange = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="/#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingChange}>
        {select}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options ', 'places__options--custom', { 'places__options--opened': isOpen === true })}>
        {sortingValues.map((value) => <li key={value} onClick={() => { dispatch(sortOffers(value)); setIsOpen(!isOpen); }} className={classNames('places__option', { 'places__option--active': select === value })} tabIndex={0}>{value}</li>)}
      </ul>
    </form>
  );
}
