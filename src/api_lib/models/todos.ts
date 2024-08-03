import { TodoDocument } from "../ts/interfaces/db_interfaces";
import mongoose, { Schema, model, Document } from "mongoose";

interface TodoInterface extends Document {
  title: string;
  description?: string;
  status: "pending" | "in progress" | "completed";
  dueDate: Date;
  user: mongoose.Types.ObjectId;
}

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
    dueDate: {
      type: Date,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose?.models?.Todo || model<TodoDocument>("Todo", todoSchema);
export default Todo;
