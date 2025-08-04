import prisma from "../src/prisma";
import { Request, Response } from "express";
//  controller functions for handling users

// simple user creation

interface CreateUserBody {
  name: string;
  email: string;
  password: string;
  role?: string; // optional, default is 'user'
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role = "user" }: CreateUserBody = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, Email and Password are required" });
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
    res.status(201).json({
      success: true,
      user,
      message: "User created successfully",
    });
  } catch (error) {
    console.log("Error Creating User:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
