import { Rating } from 'interfaces';

interface Props {
  rating: Rating;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function StarIcon({ rating, onChange }: Props) {
  const { title, value, id } = rating;

  return (
    <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={id} type="radio" onChange={onChange} />
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  );
}
