import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../widgets/auth-login-widget/model/reducers';
import layoutReducer from './core/layout/reducers';
import sessionReducer from './core/session/reducers';
import feedReducer from '../widgets/feed-main-widget/model/reducers';

const rootReducer = {
    auth: authReducer,
    feed: feedReducer,
    layout: layoutReducer,
    session: sessionReducer
};

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;