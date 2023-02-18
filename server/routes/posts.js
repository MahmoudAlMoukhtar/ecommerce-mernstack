const express = require("express");
const PostMessage = require("../models/postMessage");

const {
  getPosts,
  createPost,
  updatePost,
  deletPost,
  getPostsById,
} = require("../controller/posts");
const authMW = require("../middleware/authMW");
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostsById);
router.post("/", createPost);
router.patch("/:id", authMW, updatePost);
router.delete("/:id", authMW, deletPost);
//router.patch("/:id/likePost", authMW, likePost);

module.exports = router;
