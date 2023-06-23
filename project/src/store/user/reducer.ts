import { createReducer } from '@reduxjs/toolkit';
import { changeAuthorizationStatus, setError, saveUserInfo } from './action';
import { AuthorizationStatus } from 'const';

export interface InitialUserState {
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  name: string | null;
  avatar: string | null;
}

export const initialState: InitialUserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  name: null,
  avatar: null,
};

export const userReducer = createReducer(
  initialState, (builder) => {
    builder
      .addCase(saveUserInfo, (state, actions) => {
        state.avatar = actions.payload.avatarUrl;
        state.name = actions.payload.name;
      })
      .addCase(changeAuthorizationStatus, (state, actions) => {
        state.authorizationStatus = actions.payload;
      })
      .addCase(setError, (state, actions) => {
        state.error = actions.payload;
      });
  });
