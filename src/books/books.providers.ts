import { Mongoose } from 'mongoose';
import { BookSchema } from './schemas/book.schema';

export const BooksProviders = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Book', BookSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
