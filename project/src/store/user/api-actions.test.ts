import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { AUTH_TOKEN_KEY_NAME, createAPI } from 'services';
import { State } from 'types';
import { APIRoute } from 'const';
import { makeFakeAuthData, makeFakeUserData } from 'mocks/test-mocks';
import { checkAuth, loginAction, logoutAction } from './api-actions';
import { changeAuthorizationStatus, saveUserInfo } from './action';

const userData = makeFakeUserData();
const authData = makeFakeAuthData();

const api = createAPI();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

describe('Async actions', () => {
  it('should checkAuth when server return 200', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Login).reply(200, userData);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuth());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuth.pending.type,
      changeAuthorizationStatus.type,
      saveUserInfo.type,
      checkAuth.fulfilled.type,
    ]);
  });

  it('should checkAuth when server return 400', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Login).reply(400, userData);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuth());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuth.pending.type,
      changeAuthorizationStatus.type,
      checkAuth.fulfilled.type,
    ]);

  });

  it('should dispatch loginAction when POST /login', async () => {
    mockAPI.onPost(APIRoute.Login).reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    expect(store.getActions()).toEqual([]);
    await store.dispatch(loginAction(authData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      changeAuthorizationStatus.type,
      saveUserInfo.type,
      loginAction.fulfilled.type,
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(
      AUTH_TOKEN_KEY_NAME,
      'secret'
    );
  });

  it('should logoutAction when logout', async () => {
    mockAPI.onDelete(APIRoute.Logout).reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      changeAuthorizationStatus.type,
      logoutAction.fulfilled.type,
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(
      AUTH_TOKEN_KEY_NAME);
  });
});
