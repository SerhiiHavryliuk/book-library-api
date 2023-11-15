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

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
