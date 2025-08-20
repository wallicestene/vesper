import express from "express";
import { createPost, getAllPosts, getPostById } from "../controllers/postController";
import { requireAuth } from "../middleware/requireAuth";
const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts",requireAuth , createPost);
router.get("/posts/:id", getPostById)


export default router;
