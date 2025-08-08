import express from "express";
import { createPost, getAllPosts } from "../controllers/postController";
import { requireAuth } from "../middleware/requireAuth";
const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts",requireAuth , createPost);


export default router;
