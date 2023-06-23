import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import LoginScreen from './login-screen';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { makeFakeCity } from 'mocks/test-mocks';

const city = makeFakeCity();

const mockStore = configureMockStore();
const fakeStore = mockStore({
  offers: {city: city },
});

describe('Component: LoginScreen', () => {
  it('should render "LoginScreen" when user navigate to "login" url', async () => {
    render(
      <Provider store={fakeStore}>
        <HelmetProvider>
          <BrowserRouter>
            <LoginScreen />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    );
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email'), 'test@example.com');
    await userEvent.type(screen.getByTestId('password'), '12345678');

    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12345678')).toBeInTheDocument();
  });
});
