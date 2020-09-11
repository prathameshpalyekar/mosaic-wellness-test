import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'primary',
  storage,
  blacklist: [''],
};

const middleware = [thunk];
const persistedReducer = persistCombineReducers(persistConfig, reducers);

export function initializeStore (initialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}