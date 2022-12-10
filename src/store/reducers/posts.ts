import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  limit: number;
}

const initialState: UserState = {
  limit: 10,
};

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});
