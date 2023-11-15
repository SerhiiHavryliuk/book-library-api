import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [CatsModule, BooksModule],
})
export class AppModule {}
