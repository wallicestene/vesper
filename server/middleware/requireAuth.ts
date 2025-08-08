import { error } from "console";
import prisma from "../src/prisma";
import { Request, Response, NextFunction } from "express";

// Extend Express Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token is required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const session = await prisma.session.findUnique({
      where: { token },
      include: { user: true },
    });
    if (!session || new Date() > session.expiresAt) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    // Attach the user to request
    req.user = session.user;
    next();
  } catch (error) {
    console.error("Auth error", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
