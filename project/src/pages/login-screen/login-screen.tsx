import { AppRoute } from 'const';
import { useAppDispatch, useAppSelector } from 'hooks';
import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { loginAction } from 'store/user';

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cityName = useAppSelector((state) => state.offers.city.name);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }

    navigate(AppRoute.Main);
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Войти на сайт</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="email">E-mail</label>
              <input ref={loginRef} data-testid="email" className="login__input form__input" type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden" htmlFor="password">Password</label>
              <input ref={passwordRef} id="password" data-testid="password" className="login__input form__input" type="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to={AppRoute.Main} className="locations__item-link" style={{ cursor: 'pointer' }}>
              <span data-testid="cityname">{cityName}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
