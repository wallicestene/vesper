import cron from "node-cron";
import prisma from "../src/prisma";

const publishPostJob = () => {
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

export default publishPostJob;
