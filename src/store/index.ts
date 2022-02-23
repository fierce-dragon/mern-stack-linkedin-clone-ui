import createSagaMiddleware from 'redux-saga';
import {
  AnyAction,
  configureStore,
  Dispatch,
  EnhancedStore,
  getDefaultMiddleware,
  Middleware,
} from '@reduxjs/toolkit';
import { reduxBatch } from '@manaflair/redux-batch';
import { persistStore } from 'redux-persist';
import { rootReducer, rootSaga, TCombinedState } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  sagaMiddleware,
];

export type TMiddleware = Middleware<{}, any, Dispatch<AnyAction>>[];

export type TStore = EnhancedStore<TCombinedState, AnyAction, TMiddleware>;

const store: TStore = configureStore<TCombinedState, AnyAction, TMiddleware>({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
