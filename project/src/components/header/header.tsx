import { Logo, LoggedNav, NoLoggedNav } from 'components';
import { useEffect } from 'react';
import { checkAutn } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { AuthorizationStatus } from 'const';

export default function Header() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(checkAutn());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {auth === AuthorizationStatus.Auth ? <LoggedNav userName='Oliver.conner@gmail.com' /> : <NoLoggedNav />}
        </div>
      </div>
    </header>
  );
}
