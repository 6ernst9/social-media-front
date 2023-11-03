import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../widgets/auth-login-widget/model/reducers';

const rootReducer = {
    auth: authReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;