import { configureStore,combineReducers } from '@reduxjs/toolkit'
import LoginInfo from './Loginslice'
import DoctorLoginInfo from './DoctorSlice'
import AdminLoginInfo from './AdminSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'hospitaldatas',
  version: 1,
  storage,
}
const Rootreducer=combineReducers({login:LoginInfo,doctorlogin:DoctorLoginInfo,adminlogin:AdminLoginInfo})
const persistedReducer = persistReducer(persistConfig,Rootreducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store)

