import mongoose, { Document } from "mongoose";
export interface UserDocument extends Document {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  todoList: mongoose.Types.ObjectId[];
}

export interface TodoDocument {
  title: string;
  description?: string;
  status: "pending" | "in progress" | "completed";
  dueDate: Date;
  user: mongoose.Types.ObjectId;
}
