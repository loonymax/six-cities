import { ReviewItem } from 'components';
import { Fragment } from 'react';
import { Comment } from 'types';

interface Props {
  comments: Comment[];
}

export default function ReviewsList({ comments }: Props) {

  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => <li key={comment.id} className="reviews__item"><ReviewItem review={comment} /></li>)}
      </ul>
    </Fragment>
  );
}
