import { CitiesHomeScreen } from '../../pages/cities-home-screen';

type Props = {
  offersCount: number;
}

function App({offersCount}: Props) {
  return <CitiesHomeScreen offersCount={offersCount} />;
}

export default App;
