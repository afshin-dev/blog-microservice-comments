import { Router } from "express";

const comments: Router = Router();

// get all comments associated with a post
comments.get("/:postId", (req, res) => {
  res.status(200).json({});
});

// create  a  comment for specific post
comments.post("/:postId", (req, res) => {
  res.status(200).json({});
});

export default comments;
