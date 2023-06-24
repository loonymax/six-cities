import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, HistoryRouter } from 'components';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from 'browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode >,
);
