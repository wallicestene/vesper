import { auth } from "../src/utils/auth";
import { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import express from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await auth.api.signUpEmail({
      body: {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "securepassword123",
      },
    });
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      error: "Internal server error",
      message: "Failed to create user",
    });
  }
};
