import { configureStore } from '@reduxjs/toolkit';
import couterReducer from '../../Redux/Features/Counter/CounterSlice';
import { logger } from '../Features/Middleware/logger';
// import logger from 'redux-logger';
export const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
