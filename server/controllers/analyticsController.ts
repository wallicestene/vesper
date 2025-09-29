import prisma from "../src/prisma";
import { Request, Response } from "express";

export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const postCount = await prisma.post.count();
    const scheduledPosts = await prisma.post.count({
      where: { status: "scheduled" },
    });
    const publishedPosts = await prisma.post.count({
      where: { status: "published" },
    });
    res.status(200).json({
      postCount,
      scheduledPosts,
      publishedPosts,
    });
  } catch (error) {
    console.log("Error fetching analytics:", error);
    res.status(500).json({ error: "Failed to fetch analytics" });
  }
};

