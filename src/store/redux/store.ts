import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {apiSlice} from '../../features/reduxApi/apiSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import tron from '../../debug/reactotron-config';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  enhancers: [tron.createEnhancer!()],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
