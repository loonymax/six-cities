import { CitiesHomeScreen, LoginScreen, OfferScreen, Screen404 } from 'pages';
import { Layout } from 'components';
import { AppRoute } from 'const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter >
  );
}

export default App;
