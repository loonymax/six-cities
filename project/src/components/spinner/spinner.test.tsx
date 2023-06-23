import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Component: Screen404', () => {
  it('should render correctly', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Spinner />
        </BrowserRouter>
      </HelmetProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
