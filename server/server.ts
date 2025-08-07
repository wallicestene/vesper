import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./src/config/config";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./src/utils/auth";
//  import routes

// initialize express app
const app = express();

// middleware setup
app.use(cors());
app.use(morgan("dev"));

// Auth routes first
app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware to log request body
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  console.log("Content-Type:", req.headers["content-type"]);
  next();
});

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timeStamp: new Date().toISOString(),
  });
});

// routes

// fallback route for handling unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found!",
    requestedUrl: req.originalUrl,
  });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
  console.log(
    `Health check available at http://localhost:${config.port}/api/health`
  );
});
