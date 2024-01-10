import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomBytes } from "node:crypto";
import type { RootState } from "../index.js";

export interface Comment {
  id?: string;
  content: string;
}

interface Comments {
  [key: string]: Comment[];
}

interface CommentSliceState {
  entities: Comments;
}

const initialState: CommentSliceState = {
  entities: {},
};

const comments = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addCommentForPost: (
      state,
      action: PayloadAction<Comment & { postId: string }>
    ) => {
      // create a new comment object
      const newComment: Comment = {
        id: randomBytes(10).toString("hex"),
        content: action.payload.content,
      };

      // check for existance of comments array
      if (state.entities[action.payload.postId]) {
        state.entities[action.payload.postId].push(newComment);
      } else {
        state.entities[action.payload.postId] = [newComment];
      }
    },
  },
});

export const { addCommentForPost } = comments.actions;

export const selectAllCommentByPostId =
  (postId: string) => (state: RootState) => {
    return state.comments.entities[postId];
  };

export default comments.reducer;
