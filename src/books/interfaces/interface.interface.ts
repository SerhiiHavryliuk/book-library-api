import { Document } from 'mongoose';

export interface Book extends Document {
  readonly id: string;
  readonly title: string;
  readonly author: number;
  readonly isFavorite: boolean;
}
