import {useAppSelector} from 'hooks';
import './error-message.css';

export default function ErrorMessage() {
  const error = useAppSelector((state) => state.offers.error);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}
