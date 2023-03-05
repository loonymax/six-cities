import { CitiesHomeScreen } from 'pages';

type Props = {
  offersCount: number;
}

function App({offersCount}: Props) {
  return <CitiesHomeScreen offersCount={offersCount} />;
}

export default App;
