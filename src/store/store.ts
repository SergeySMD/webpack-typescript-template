import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './reducers/posts';
import { usersReducer } from './reducers/users';
import postAPI from '../api/postApi';

const rootReducer = combineReducers({
  [usersReducer.name]: usersReducer.reducer,
  [postsReducer.name]: postsReducer.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
});
export const setupStore = () => {
  return configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
