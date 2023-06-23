import { Helmet } from 'react-helmet-async';

export default function Screen404() {
  return (
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <h1 className='property__name'>Ошибка 404. Страницы не существует.</h1>
    </>
  );
}
