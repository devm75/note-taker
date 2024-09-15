import mongoose, { Document } from "mongoose";
export interface UserInterface extends Document {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  notes: mongoose.Types.ObjectId[];
}

export interface NoteInterface extends Document {
  content: string;
  tags?: string[];
  user: mongoose.Types.ObjectId;
  favourite: boolean;
  timestamps: boolean;
}
