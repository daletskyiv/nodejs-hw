import { Schema, model } from 'mongoose';
import { TAGS } from '../constans/tags.js';

const notesSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true, default: '' },
    tag: {
      type: String,
      default: 'Todo',
      enum: TAGS,
    },
  },
  { versionKey: false, timestamps: true },
);

notesSchema.index({ tag: 1 });

export const Note = model('note', notesSchema);
