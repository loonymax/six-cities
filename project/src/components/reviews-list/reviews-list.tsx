import { ReviewItem } from 'components';
import { reviews } from 'mocks';

export default function ReviewsList() {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => <li key={item.id} className="reviews__item"><ReviewItem review={item} /></li>)}
    </ul>
  );
}
