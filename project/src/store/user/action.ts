import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from 'const';
import { UserData } from 'types';

export const setError = createAction<string | null>('data/setError');
export const saveUserInfo = createAction<UserData>('data/saveUserName');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/changeAuthorizationStatus');

