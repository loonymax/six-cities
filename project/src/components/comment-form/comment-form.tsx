import { StarIcon } from 'components';
import { useState } from 'react';

interface FormData {
  review: string;
}

export default function CommentForm() {
  const [formData, setFormData] = useState<FormData>({
    review: '',
  });

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} onChange={handleTextareaChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
