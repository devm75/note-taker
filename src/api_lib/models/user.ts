import mongoose, { Schema, model } from "mongoose";
import { UserInterface } from "../ts/interfaces/db_interfaces";

const UserSchema = new Schema<UserInterface>(
  {
    id: String,
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
  },
  {
    timestamps: true,
  }
);

// If a User model already exists, it will reuse the existing model.
// If it doesn't exist, it will create a new one. This approach prevents redefining
// the model multiple times, which can cause issues in applications where models might
// be imported multiple times.
const User = mongoose.models?.User || model<UserInterface>("User", UserSchema);
export default User;
