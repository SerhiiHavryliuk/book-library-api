import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  isFavorite: Boolean
});
