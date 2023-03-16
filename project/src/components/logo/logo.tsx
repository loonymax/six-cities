import { useLocation, Link } from 'react-router-dom';
import { AppRoute } from 'const';


export default function Logo() {
  const location = useLocation();

  if (location.pathname === AppRoute.Main) {
    return (
      <div className="header__left">
        <img className="header__logo" src="img/logo.svg" alt="six cities logo" width="81" height="41" />
      </div>
    );
  }
  return (
    <div className="header__left">
      <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="six cities logo" width="81" height="41" />
      </Link>
    </div>
  );

}
