import { CitiesHomeScreen, LoginScreen, OfferScreen, Screen404 } from 'pages';
import { Layout } from 'components';
import { AppRoute } from 'const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { offers } from 'mocks/offers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={<CitiesHomeScreen offersList={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route path={AppRoute.Offer}>
            <Route path=':id' element={<OfferScreen />} />
          </Route>
          <Route
            path='*'
            element={<Screen404 />}
          />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
