import { Header } from 'components';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}
