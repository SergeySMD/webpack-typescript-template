import { IUser } from '../../models/users';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './ActionCreators';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  limit: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  limit: 10,
};

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [getUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
