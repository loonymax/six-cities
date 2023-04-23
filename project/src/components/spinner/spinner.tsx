import './style.css';

export default function Spinner() {
  return (
    <div className='spinner'>
      <p className="spinner__text">Loading...</p>
      <div className="infinity-1"></div>
    </div>
  );
}
