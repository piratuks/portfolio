import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { alertSlice } from './alertSlice';
import { configurationApi } from './configurationApi';
import { configurationSlice } from './configurationSlice';

export const store = configureStore({
  reducer: {
    [configurationApi.reducerPath]: configurationApi.reducer,
    [configurationSlice.name]: configurationSlice.reducer,
    [alertSlice.name]: alertSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(configurationApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
