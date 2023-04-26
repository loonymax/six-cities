import { Logo, LoggedNav, NoLoggedNav } from 'components';
import { useEffect } from 'react';
import { checkAuth } from 'store/user';
import { useAppDispatch, useAppSelector } from 'hooks';
import { AuthorizationStatus } from 'const';

export default function Header() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.user.authorizationStatus);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {auth === AuthorizationStatus.Auth ? <LoggedNav /> : <NoLoggedNav />}
        </div>
      </div>
    </header>
  );
}
