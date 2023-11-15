import {Inject, Injectable} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {Model} from "mongoose";
import {Book} from "./interfaces/interface.interface";

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<Book>) {}

  async create(CreateBookDto: CreateBookDto): Promise<Book> {
    const createdBook = this.bookModel.create(CreateBookDto);
    return createdBook;
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book | null> {
    const foundBook = await this.findOneById(id);

    if (!foundBook) {
      return null; // Обробка випадку, коли об'єкт не знайдено
    }

    // Оновлюємо знайдений об'єкт
    foundBook.set(updateBookDto);
    const updatedBook = await foundBook.save();

    return updatedBook;
  }

  async findOneById(id: string): Promise<Book | null> {
    const foundBook = await this.bookModel.findOne({ id }).exec();
    return foundBook;
  }

  async removeById(id: string): Promise<Book | null> {
    const deletedBook = await this.bookModel.findOneAndDelete({ id }).exec();
    return deletedBook;
  }
}
