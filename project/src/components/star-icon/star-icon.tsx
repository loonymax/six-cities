export default function StarIcon() {
  return (
    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  );
}
