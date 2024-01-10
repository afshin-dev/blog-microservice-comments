import { Router } from "express";
import { store } from "../store/index.js";
import {
  addCommentForPost,
  selectAllCommentByPostId,
  Comment,
} from "../store/slices/commnets.slice.js";
import { STATUS_CODES } from "node:http";
const comments: Router = Router();

// get all comments associated with a post
comments.get("/:postId", (req, res) => {
  res
    .status(200)
    .json(selectAllCommentByPostId(req.params.postId)(store.getState()));
});

// create  a  comment for specific post
comments.post("/:postId", (req, res) => {
  if (!req.body?.content) {
    res.status(400).json({ error: STATUS_CODES["400"] });
    return;
  }

  const comment: Comment = {
    content: req.body.content,
  };

  store.dispatch(
    addCommentForPost({
      postId: req.params.postId,
      content: comment.content,
    })
  );

  res.status(201).json({});
});

export default comments;
