import { all } from 'redux-saga/effects';
import { AnyAction, CombinedState, combineReducers } from 'redux';

import * as auth from './Auth/authRedux';
import { PersistPartial } from 'redux-persist/es/persistReducer';

export type TCombinedState = CombinedState<{
  auth: auth.IAuth & PersistPartial;
}>;

export const rootReducer = combineReducers<TCombinedState, AnyAction>({
  auth: auth.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
