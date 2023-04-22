import { StarIcon } from 'components';
import { ChangeEventHandler, FormEvent, useState } from 'react';
import { ratingStars } from 'mocks';
import { ReviewFormValue } from 'const';
import { useAppDispatch } from 'hooks';
import { sendReviewAction } from 'store/api-actions';

interface Props {
  offerId: number;
}

interface FormData {
  review: string;
  rating: number;
}

export default function CommentForm({ offerId }: Props) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    review: '',
    rating: 0,
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

  const isFormDisabled = () => {
    const isSetRating = formData.rating > ReviewFormValue.Default;
    const isSetReview = formData.review.length > ReviewFormValue.MinLength && formData.review.length < ReviewFormValue.MaxLength;

    return isSetRating && isSetReview;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item) => <StarIcon key={item.id} rating={item} onChange={handleFormChange} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength={50} maxLength={300} value={formData.review} onChange={handleFormChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormDisabled()}>Submit</button>
      </div>
    </form>
  );
}
