import { AnyAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { takeLatest } from 'redux-saga/effects';

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserRequested: '[Request User] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
};

type TUser = string | undefined;
type TAuthToken = string | undefined;

export interface IAuth {
  user: TUser;
  authToken: TAuthToken;
}

const initialAuthState: IAuth = {
  user: undefined,
  authToken: undefined,
};

export const reducer = persistReducer<IAuth, AnyAction>(
  { storage, key: 'v713-demo1-auth', whitelist: ['user', 'authToken'] },
  (state: IAuth = initialAuthState, action: AnyAction) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;
        return { authToken, user: undefined };
      }

      case actionTypes.Register: {
        const { authToken } = action.payload;
        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      case actionTypes.SetUser: {
        const { user } = action.payload;
        return { ...state, user };
      }

      default:
        return state;
    }
  },
);

export const actions = {
  login: (authToken: TAuthToken) => ({
    type: actionTypes.Login,
    payload: { authToken },
  }),
  register: (authToken: TAuthToken) => ({
    type: actionTypes.Register,
    payload: { authToken },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user: TUser) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user: TUser) => ({
    type: actionTypes.UserLoaded,
    payload: { user },
  }),
  setUser: (user: TUser) => ({ type: actionTypes.SetUser, payload: { user } }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    // yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    // yield put(actions.requestUser());
  });
}
