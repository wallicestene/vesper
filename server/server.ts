import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./src/config/config";

//  import routes
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";
// initialize express app
const app = express();

// middleware setup
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware to log request body
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  console.log('Content-Type:', req.headers['content-type']);
  next();
});

// connect to the postgreSQL database

// routes
app.use(postRoutes);
app.use(userRoutes)
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
