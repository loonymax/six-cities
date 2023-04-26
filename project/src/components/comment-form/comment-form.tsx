import { StarIcon } from 'components';
import { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { ratingStars } from 'mocks';
import { useAppDispatch, useAppSelector } from 'hooks';
import { sendReviewAction } from 'store/offer/api-actions';

interface Props {
  offerId: number;
}

interface FormData {
  review: string;
  rating: number;
}

const reviewFormValue = {
  Default: 0,
  MinLength: 50,
  MaxLength: 300,
};

const formInitial: FormData = {
  review: '',
  rating: reviewFormValue.Default,
};

export default function CommentForm({ offerId }: Props) {
  const dispatch = useAppDispatch();
  const comment = useAppSelector((state) => state.offers.comment);

  const [formData, setFormData] = useState(formInitial);

  useEffect(() => {
    if (comment.isSuccess) {
      setFormData(formInitial);
    }
  }, [comment.isSuccess]);

  const handleFormChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(sendReviewAction({
      offerId: offerId,
      comment: formData.review,
      rating: formData.rating,
    }));
  };

  const isFormValid = () => {
    const isRatingSet = formData.rating > reviewFormValue.Default;
    const isReviewSet = formData.review.length >= reviewFormValue.MinLength && formData.review.length <= reviewFormValue.MaxLength;

    return isRatingSet && isReviewSet;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      {comment.error ? <div style={{ color: 'red' }}>{comment.error}</div> : ''}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star) => <StarIcon key={star.id} rating={star} onChange={handleFormChange} checked={formData.rating.toString() === star.value.toString()}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength={reviewFormValue.MinLength} maxLength={reviewFormValue.MaxLength} value={formData.review} onChange={handleFormChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid() || comment.isPending}>Submit</button>
      </div>
    </form>
  );
}
