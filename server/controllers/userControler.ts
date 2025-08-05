import prisma from "../src/prisma";
import { Request, Response } from "express";
import validator from "validator";
import bcrypt from "bcryptjs";
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
    // validation
    if (!name || !email || !password) {
      throw Error("Name, email, and password are required");
    }
    if (!validator.isEmail(email)) {
      throw Error("Invalid email format");
    }
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
      })
    ) {
      throw Error(
        "Password must be at least 8 characters long, contain at least one uppercase letter and one number"
      );
    }
    // check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw Error("User already exists with this email");
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        role,
      },
    });
    res.status(202).json({
      success: true,
      user,
      message: "User created successfully",
    });
  } catch (error) {
    console.log("Error Creating User:", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to create user",
    });
  }
};
