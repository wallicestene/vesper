import cron from "node-cron";
import prisma from "../src/prisma";
import { promise } from "better-auth/*";

export const publishPostJob = () => {
  cron.schedule("* * * * *", async () => {
    try {
      const posts = await prisma.post.findMany({
        where: {
          status: "scheduled",
          scheduledAt: {
            lte: new Date(),
          },
        },
      });
      await Promise.all(
        posts.map(async (post) => {
          await prisma.post.update({
            where: { id: post.id },
            data: { status: "published" },
          });
        })
      );
      console.log("Published posts:", posts);
    } catch (error) {
      console.error("Error in publishPostJob:", error);
    }
  });
};
// analytics simulation such as likes and comments
export const simulateAnalytics = async () => {
  cron.schedule("* * * * *", async () => {
    try {
      const publishedPosts = await prisma.post.findMany({
        where: {
          status: "published",
        },
        include: { analytics: true },
      });
      await Promise.all(
        publishedPosts.map(async (post) => {
          const likesIncrement = Math.floor(Math.random() * 10);
          const commentsIncrement = Math.floor(Math.random() * 3);

          if (post.analytics) {
            await prisma.analytics.update({
              where: {
                id: post.analytics.id,
              },
              data: {
                likes: post.analytics.likes + likesIncrement,
                comments: post.analytics.comments + commentsIncrement,
              },
            });
          } else {
            await prisma.analytics.create({
              data: {
                postId: post.id,
                likes: likesIncrement,
                comments: commentsIncrement,
              },
            });
          }
        })
      );
      console.log("Simulated analytics data for published posts");
    } catch (error) {
      console.error("Error in simulateAnalytics:", error);
    }
  });
};
