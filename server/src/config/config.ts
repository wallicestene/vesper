import dotenv from "dotenv";
dotenv.config();

interface Config {
  port: number;
  dbUrl: string;
}

const config: Config = {
  port: parseInt(process.env.PORT as string) || 3030,
  dbUrl: process.env.DATABASE_URL || "",
};

export default config;
