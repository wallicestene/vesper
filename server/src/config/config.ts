import dotenv from "dotenv";
dotenv.config();

interface Config {
  port: number;
  dbUrl: string;
  frontendUrl: string;
  trustedOrigins: string[];
}

const config: Config = {
  port: parseInt(process.env.PORT as string) || 3030,
  dbUrl: process.env.DATABASE_URL || "",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  trustedOrigins: [
    process.env.FRONTEND_URL || "http://localhost:3000",
    ...(process.env.TRUSTED_ORIGINS
      ? process.env.TRUSTED_ORIGINS.split(",")
      : []),
  ],
};

export default config;
