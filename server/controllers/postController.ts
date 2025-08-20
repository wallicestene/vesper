import { error } from "console";
import prisma from "../src/prisma";
import { Request, Response } from "express";
// controller functions for handling posts

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findMany();
    res.status(200).json(post);
  } catch (error) {
    console.log("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
// create a new post
interface CreatePostBody {
  userId: string;
  content: string;
  mediaUrl: string;
  scheduledAt: Date;
  status?: string; // default to "scheduled" if not provided
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const { content, mediaUrl, scheduledAt, status }: CreatePostBody = req.body;

    // get user from request
    const { id } = req.user;

    // Validate required fields
    if (!id || !content || !scheduledAt) {
      return res.status(400).json({
        error:
          "Missing required fields: userId, content and scheduledAt are required.",
      });
    }

    const post = await prisma.post.create({
      data: {
        userId: id,
        content,
        mediaUrl,
        scheduledAt,
        status,
      },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};
// get a single post by ID
export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      res.status(404).json({ error: "No post found with that Id!" });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    console.log("Error fetching post:", error);
    res.status(500).json({ error: "Failed to fetch post" });
  }
};
