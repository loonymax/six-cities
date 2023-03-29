import { ReviewItem } from 'components';
import { reviews } from 'mocks';

export default function ReviewsList() {
  return (
    <ul className="reviews__list">
      {reviews.map((item) => <ReviewItem key={item.id} review={item}/>)}
    </ul>
  );
}
