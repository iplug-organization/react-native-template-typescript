import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    // All reducers informations will be saved on Async Storage
    // Todas as que estão nos reducers informações que estão no whitelist serão salvas no Async Storage
    whitelist: ['auth'],

    /*
      Case you want exclude any informations
      Async Storage uses the blacklist

      ( Caso você não queira que as informações sejam
        salvas no Async Storage use o Black List )
    */
    blacklist: [],
  },
  Reducers
);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
