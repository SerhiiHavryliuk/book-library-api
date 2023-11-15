import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import {DatabaseModule} from "../database/database.module";
import { BooksProviders } from './books.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, ...BooksProviders],
})
export class BooksModule {}
