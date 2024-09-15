"use server";
import { connectDB } from "@/src/api_lib/mongodb";
import User from "@/src/api_lib/models/user";
import bcrypt from "bcryptjs";

export const _register = async (values: any) => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: "Email already exists!",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
  } catch (e) {
    console.log(e, "error");
    return {
      error: e,
    };
  }
};
