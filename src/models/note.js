import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const notesSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true, default: '' },
    tag: {
      type: String,
      default: 'Todo',
      enum: TAGS,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

notesSchema.index({ tag: 1, userId: 1 });

export const Note = model('note', notesSchema);
