import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://serhii:12345@cluster0.hr9dt.mongodb.net/mybooks?retryWrites=true&w=majority'),
  },
];
