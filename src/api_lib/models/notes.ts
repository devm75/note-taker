import mongoose, { Schema, model, Model, Document } from "mongoose";

interface NotesInterface extends Document {
  content: string;
  tags?: string[];
  user: mongoose.Types.ObjectId;
  favourite: boolean;
  timestamps: boolean;
}

const notesSchema = new Schema<NotesInterface>({
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: false,
    default: [],
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  favourite: {
    type: Boolean,
    default: false,
  },

  timestamps: true,
});

const Note: Model<NotesInterface> =
  mongoose?.models?.Todo || model<NotesInterface>("Notes", notesSchema);
export default Note;
