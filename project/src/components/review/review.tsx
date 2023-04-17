import { Comment } from 'types';
import { Fragment } from 'react';

interface Props {
  review: Comment;
}

const getDate = (dateData: string) => {
  const date = new Date(dateData);

  const day = date.getDay().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const dateText = date.toLocaleString('en-US', { month: 'long', year: 'numeric'});
  const dateTime = `${year}-${month}-${day}`;

  return [dateText, dateTime];
};

export default function ReviewItem({ review }: Props) {
  const { comment, date, rating, user: { avatarUrl, name, isPro } } = review;
  const [dateText, dateTime] = getDate(date);

  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
        {isPro ? (<span className="reviews__user-status">Pro</span>) : null}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 100 / 5}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{dateText}</time>
      </div>
    </Fragment>
  );
}
