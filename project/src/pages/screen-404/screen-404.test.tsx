import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Screen404 from './screen-404';
import { render, screen } from '@testing-library/react';

describe('Component: Screen404', () => {
  it('should render correctly', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Screen404 />
        </BrowserRouter>
      </HelmetProvider>
    );

    expect(screen.getByText('Ошибка 404. Страницы не существует.')).toBeInTheDocument();
  });
});
