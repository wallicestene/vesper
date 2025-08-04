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
  name: string;
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const { name }: CreatePostBody = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const post = await prisma.post.create({
      data: { name },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
};
