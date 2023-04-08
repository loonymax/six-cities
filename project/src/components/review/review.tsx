import { Review } from 'types';
import { Fragment } from 'react';

interface Props {
  review: Review;
}

export default function ReviewItem({ review }: Props) {
  const { image, userName, rating, text, date, dateTime } = review;

  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={image} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: rating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={dateTime}>{date}</time>
      </div>
    </Fragment>
  );
}
