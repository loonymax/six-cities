import { CitiesHomeScreen, LoginScreen, OfferScreen, Screen404 } from 'pages';
import { Layout } from 'components';
import { AppRoute } from 'const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface IProps {
  offersCount: number;
}

function App({ offersCount }: IProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={<CitiesHomeScreen offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
          />
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
