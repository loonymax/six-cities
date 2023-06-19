import { userReducer, initialState } from './reducer';
import { changeAuthorizationStatus, saveUserInfo, setError } from './action';
import { makeFakeUserData } from 'mocks/test-mocks';
import { AuthorizationStatus } from 'const';

const user = makeFakeUserData();

describe('Reducer: userReducer', () => {
  it('should save user information', () => {
    expect(userReducer(initialState, saveUserInfo(user)))
      .toEqual({ ...initialState, avatar: user.avatarUrl, name: user.name });
  });

  it('should change authorization status', () => {
    expect(userReducer(initialState, changeAuthorizationStatus(AuthorizationStatus.Auth)))
      .toEqual({ ...initialState, authorizationStatus: AuthorizationStatus.Auth });
  });

  it('should set error', () => {
    expect(userReducer(initialState, setError('error')))
      .toEqual({...initialState, error: 'error'});
  });
});
