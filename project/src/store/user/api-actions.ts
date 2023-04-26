import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch, AuthData, UserData } from 'types';
import { changeAuthorizationStatus, saveUserInfo, setError } from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from 'const';
import { dropToken, saveToken } from 'services';
import { store } from '../configure-store';

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchLogin',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(saveUserInfo(data));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(saveUserInfo(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
