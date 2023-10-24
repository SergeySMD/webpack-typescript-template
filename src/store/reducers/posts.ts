import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  limit: number;
}

const initialState: UserState = {
  limit: 10,
};

export const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});
export const { setPostsLimit } = postsReducer.actions;
