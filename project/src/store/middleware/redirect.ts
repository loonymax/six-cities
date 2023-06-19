import { Middleware } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';
import { reducer } from 'store/reducer';
import { REDIRECT_ACTION } from 'store/actions';
import browserHistory from 'browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === REDIRECT_ACTION) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
