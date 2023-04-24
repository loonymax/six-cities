import { StarIcon } from 'components';
import { ChangeEventHandler, FormEvent, useState } from 'react';
import { ratingStars } from 'mocks';
import { useAppDispatch } from 'hooks';
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

export default function CommentForm({ offerId }: Props) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    review: '',
    rating: reviewFormValue.Default,
  });

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
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item) => <StarIcon key={item.id} rating={item} onChange={handleFormChange} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength={reviewFormValue.MinLength} maxLength={reviewFormValue.MaxLength} value={formData.review} onChange={handleFormChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid()}>Submit</button>
      </div>
    </form>
  );
}
