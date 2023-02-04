import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertProps } from 'components/notifications/Alert/Alert';
import { RootState } from './configureStore';

export interface AlertPropsExtension extends AlertProps {
  id: string;
}

export interface AlertState {
  list: AlertPropsExtension[];
}

const initialState: AlertState = {
  list: []
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    alertAdd: (state, action: PayloadAction<AlertPropsExtension>) => {
      if (!state.list.some(alertItem => alertItem.id === action.payload.id)) state.list.push(action.payload);
    },
    alertRemove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(alertItem => alertItem.id !== action.payload);
    },
    alertsClear: (state, _action: PayloadAction<void>) => {
      state.list = initialState.list;
    }
  }
});
export const selectAlerts = (state: RootState) => state.alert.list;
export const { alertAdd, alertRemove, alertsClear } = alertSlice.actions;
