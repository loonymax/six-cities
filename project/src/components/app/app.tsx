import { CitiesHomeScreen, LoginScreen, OfferScreen, Screen404 } from 'pages';
import { HelmetProvider } from 'react-helmet-async';
import { Layout, ScrollToTop } from 'components';
import { AppRoute } from 'const';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={<CitiesHomeScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer} element={<OfferScreen />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<Screen404 />}
          />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
