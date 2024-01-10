import { configureStore } from "@reduxjs/toolkit";
import CommentSlice from "./slices/commnets.slice.js";

export const store = configureStore({
  reducer: {
    comments: CommentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
