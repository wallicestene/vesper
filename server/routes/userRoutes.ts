import express from "express";
import { createUser } from "../controllers/userControler";
const router = express.Router();
// Route to create a new user
router.post("/user", createUser);

// Export the router
export default router;
